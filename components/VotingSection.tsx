import React from 'react'
import { getOptionsForVote } from '../utils/getRandomPokemon';
import Pokemon from './Pokemon'

type VotingSectionType = {

}

function VotingSection(props: VotingSectionType) {
  const [first, second] = getOptionsForVote();
  return (
    <div className='p-8 flex justify-between max-w-2xl items-center'>
      <Pokemon>{first}</Pokemon>
      <div className="p-8">
        Vs
      </div>
      <Pokemon>{second}</Pokemon>
    </div>
  )
}

export default VotingSection