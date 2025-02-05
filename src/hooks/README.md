# Hooks

Hooks in React are a set of functions that contains logic that can be used inside components. They provide a way for us to create reusable "words" simplifying and allows for centralization of logic. The other use case is to seperate out complex pieces of logic into a small format which can more easily be resoned about and verified.

You might think about these as returning values and functions that does operations on those values.

Another approach here is to think of React as a selfcontained system used to display data from somewhere else. Hooks are a pattern for how to specify when to synchronization with those external system both when it should happen, how often, and what to do when failures occur.

## Simple examples

### Counter

An example to showcase how these can be setup. Most hooks will contain more logic than this.

```ts
// Hook
export function useCounter(initialCount = 0) {
  // Any state you need to keep track of internally
  const [count, setCount] = useState(initialCount);

  // Hardcoded or derived values
  const maxCount = 100;
  const minCount = 0;
  const isEven = count % 2 === 0;
  const isOdd = !isEven;

  // Logic that you want the component to use,
  // possibly internal functions as well
  const increment = setCount((oldCount) =>
    oldCount < maxCount ? oldCount + 1 : oldCount,
  );
  const decrement = setCount((oldCount) =>
    oldCount > minCount ? oldCount - 1 : oldCount,
  );
  const reset = setCount(0);

  // What you want the component to access
  return {
    isEven,
    isOdd,
    count,
    increment,
    decrement,
    reset,
  };
}
```

```tsx
// Component
epxort function Counter() {
  const {
    isEven,
    isOdd,
    count,
    increment,
    decrement,
    reset
  } = useCounter(0)

  return (
    <div>
      <p>Count: {count}. It's an {isEven ? "even" : "odd"} number.</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

## React Documentation

- [React Hooks Reference](https://react.dev/reference/react/hooks)
- [React Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
