import Image from 'next/image';
import React from 'react'
import { Pokemon } from '../pages/rankings'

export type PokemonItemType = Pokemon['pokemon'][number];

type PokemonListItemType = {
  pokemonItem: PokemonItemType
}

const generateCountPercent = (pokemon: PokemonItemType) => {
  const { _count: { votesFor, votesAgainst } } = pokemon;
  if (votesFor + votesAgainst === 0) return '0'
  return votesFor / (votesFor + votesAgainst) * 100
}

function PokemonListItem({ pokemonItem }: PokemonListItemType) {
  const { spriteUrl: pokemonPicture, name } = pokemonItem;
  return (
    <div className='flex border-b border-b-slate-600 p-4 mt-2 items-center justify-between'>
      <div className='flex items-center'>
        <Image width={64} height={64} className='w-full h-full object-cover' src={pokemonPicture} alt={name} />
        <h5 className='capitalize ml-10 font-semibold'>{name}</h5>
      </div>
      <div>
        {
          generateCountPercent(pokemonItem) + "%"
        }
      </div>
    </div>
  )
}

export default PokemonListItem