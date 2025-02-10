import React from "react";
import { useJson } from "../../Hooks";

type PokemonDetails = {
  sprites: {
    front_default: string;
  };
  name: string;
};

export interface PokemonDetialsProperties {
  detailsUrl: string;
}

/**
 * An example component for testing purposes
 */
export function PokemonDetials({ detailsUrl }: PokemonDetialsProperties) {
  const { error, isPending, json } = useJson<PokemonDetails>(detailsUrl);

  return (
    <div>
      {isPending ? (
        <p>Loading..</p>
      ) : error ? (
        <p>Error..</p>
      ) : (
        <>
          <h2>{json.name}</h2>
          <img src={json.sprites.front_default} alt="" />
        </>
      )}
    </div>
  );
}
