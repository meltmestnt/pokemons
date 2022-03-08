import React from 'react'
import { getOptionsForVote } from '../utils/getRandomPokemon';
import { trpc } from '../utils/trpc';
import Pokemon from './Pokemon'

type VotingSectionType = {

}

function VotingSection(props: VotingSectionType) {
  const [[first, second], setPokemons] = React.useState(getOptionsForVote());

  const firstPokemon = trpc.useQuery(["getPokemonById", { id: first }]);
  const secondPokemon = trpc.useQuery(["getPokemonById", { id: second }]);

  return (
    <div className='p-8 flex justify-between max-w-2xl items-center'>
      <Pokemon response={firstPokemon} />
      <div className="p-8">
        Vs
      </div>
      <Pokemon response={secondPokemon} />
    </div>
  )
}

export default VotingSection