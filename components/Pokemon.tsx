import Image from 'next/image';
import { Pokemon } from 'pokenode-ts'
import React from 'react'
import { inferQueryResponse } from '../pages/api/trpc/[trpc]';
import { withQuery } from '../utils/HOC/withQuery'

export type PokemonDataType = inferQueryResponse<"getPokemonById">

type PokemonType = {
  pokemon: PokemonDataType,
}

function Pokemon({ pokemon, ...rest }: PokemonType) {
  const { sprites: { front_default: pokemonPicture }, name } = pokemon;
  return (
    <div className="min-w-64 min-h-64 w-full h-full flex flex-col items-center justify-center">
      {
        pokemonPicture
          && <Image width={256} height={256} className='w-full h-full object-cover' src={pokemonPicture} alt={name} />
      }
      <h5 className='capitalize text-xl text-center'>{name}</h5>
    </div>
  )
}

export default withQuery<PokemonType, PokemonDataType>(Pokemon, "pokemon")