import { useEffect, useMemo, useState } from "react";

/**
 * An object containing metadata for the concrete failure
 */
type FailureType = {
  /**
   * Message containing the category of the failure
   */
  category: FailureCategory;
  /**
   * Error specific information as a set of lables
   */
  context: Record<string, string>;
};

/**
 * The categories of errors that might occur, grouped by where they
 * can be fixed.
 */
enum FailureCategory {
  /**
   * Client errors are failures that the user, or frontend developer
   * needs to fix.
   */
  CLIENT = "Client error",
  /**
   * Server side errors which the client can't do
   * anything about, except retry later.
   */
  SERVER = "Server error",
  /**
   * Identified network errors, suggestion is to retry later.
   * Though it also might contain hardware errors, which are not
   * fixable.
   */
  NETWORK = "Network error",
  /**
   * Errors that are opaque to the applications and are not
   * knownable without the help of external tools.
   * ie: host system errors, non-standard server responses, etc.
   */
  OTHER = "Unknown error",
}

/**
 * The happy path which all calls hopefully resolves to.
 */
type Success<T> = {
  json: T;
  error: null;
};

/**
 * An unrecoverable error occured. The error can be querried to
 * guide further decisions.
 */
type Failure<E> = {
  json: null;
  error: E;
};

/**
 * A wrapper around a type which might be a value or a failure.
 */
type Result<T, E> = Success<T> | Failure<E>;

/**
 * Contains the logic for fetching JSON objects from a backend,
 * returning the appropriate success or failure state, along
 * with a typed response.
 *
 * It's in essence just a wrapper around fetch,
 * where we return an object containing the json data
 * or an object with errors and contextual information
 * that we deem required for simplifying debugging
 * and decision making if anything goes wrong.
 *
 * Note how it just return the Success or Failure type,
 * the promise is what's being used to determine if it
 * is pending in the hook itself.
 *
 * @param url resource locator
 * @param signal signal for aborting request
 * @param options any extra headers or other options the caller need to provide
 * @returns
 */
export async function fetchJson<T>(
  url: URL | string,
  options: RequestInit,
): Promise<Result<T, FailureType>> {
  // Fetch might fail due to a number of reasons
  try {
    const response = await fetch(url, options);

    // Catch non 200 errors here
    if (!response.ok) {
      return {
        json: null,
        error: {
          category:
            response.status >= 500
              ? FailureCategory.SERVER
              : FailureCategory.CLIENT,
          context: {
            url: url.toString(),
            statusCode: response.status.toString(),
          },
        },
      };
    }

    // TODO: Handle parsing errors
    const jsonUnkown = (await response.json()) as unknown;

    // TODO: Allow type validation
    const jsonKnown = jsonUnkown as T;

    return {
      json: jsonKnown,
      error: null,
    };
  } catch (error) {
    // TODO: Ensure this is enough context for the consumer
    if (error instanceof TypeError) {
      return {
        json: null,
        error: {
          category: FailureCategory.NETWORK,
          context: {
            url: url.toString(),
            message: error.message,
          },
        },
      };
    } else {
      return {
        json: null,
        error: {
          category: FailureCategory.OTHER,
          context: {
            url: url.toString(),
            message: String(error),
          },
        },
      };
    }
  }
}

/**
 * This is the initial state, where we wait until requests are resolved
 */
type Pending = {
  isPending: true;
  json: null;
  error: null;
};

/**
 * Represents the valid states of a requests in the hook.
 */
export type RequestState<T> =
  | Pending
  | (Success<T> & { isPending: false })
  | (Failure<FailureType> & { isPending: false });

/**
 * Initial State of the hook.
 */
const initialState: Pending = {
  isPending: true,
  json: null,
  error: null,
};

/**
 * Gets you the JSON object at the given path.
 * If the url changes, the data is dropped,
 * ensuring we only display fresh data.
 *
 * @param url The path to the resource
 * @returns
 */
export function useJson<T = unknown>(url: URL | string): RequestState<T> {
  const [state, setState] = useState<RequestState<T>>(initialState);

  // The user might pass in a URL object which can, if created incorrectly
  // be reacreated on each render pass. To Ease the burden on junior developers
  // we are caching this here, and only changing it if the string representation
  // actually changes. This is also the reason we disable ESLint for the line
  // as it wants the url to also be a dependency, which in this case it's not.
  // eslint-disable-next-line
  const cachedUrl = useMemo(() => url, [url.toString()]);

  useEffect(() => {
    // Clear out the displayed data when performing a new fetch
    setState(initialState);

    // Use an AbortController so we can cancel the fetch request
    // in case the component umounts or the url changes
    const controller = new AbortController();

    // Call out to the fetch function and set the state to the result
    fetchJson<T>(cachedUrl, { signal: controller.signal }).then((result) => {
      // This is an async callback, only set the state if
      // the request hasn't been aborted
      if (!controller.signal.aborted) {
        setState({
          isPending: false,
          ...result,
        });
      }
    });

    // When the component umounts
    return () => {
      // Cancel the request
      controller.abort();
      // Clear out the displayed data
      setState(initialState);
    };
    // This effect is tied to the given URL
  }, [cachedUrl]);

  /**
   * We are keeping the whole state as a single object,
   * so just return that object as is.
   */
  return state;
}
