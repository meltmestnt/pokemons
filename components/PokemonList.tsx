import React from 'react'
import type { Pokemon } from './../pages/rankings';
import PokemonListItem from './PokemonListItem';
type PokemonListType = {
  pokemon: Pokemon['pokemon']
}

function PokemonList({ pokemon }: PokemonListType) {
  return (
    <div className='flex flex-col min-h-full'>
      {
        pokemon.map(p => <PokemonListItem key={p.id} pokemonItem={p} />)
      }
    </div>
  )
}

export default PokemonList