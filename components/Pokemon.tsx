import Image from 'next/image';
import { Pokemon } from 'pokenode-ts'
import React from 'react'
import { withQuery } from '../utils/HOC/withQuery'

type PokemonType = {
  pokemon: {
    name: string,
    sprites: {
      front_default: string
    }
  },
}

function Pokemon({ pokemon, ...rest }: PokemonType) {
  const { sprites: { front_default: pokemonPicture }, name } = pokemon;
  return (
    <div className="w-64 h-64 flex flex-col items-center justify-center">
      {
        pokemonPicture
          && <img className='w-full h-full object-cover' src={pokemonPicture} alt={name} />
      }
      <h5 className='mt-[-2rem] capitalize text-xl text-center'>{name}</h5>
    </div>
  )
}

export default withQuery(Pokemon, "pokemon")