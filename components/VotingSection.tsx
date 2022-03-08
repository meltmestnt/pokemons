import React from 'react'
import { UseQueryResult } from 'react-query';
import { getOptionsForVote } from '../utils/getRandomPokemon';
import { trpc } from '../utils/trpc';
import Pokemon, { PokemonDataType } from './Pokemon'
import Button from './UI/Button';

type VotingSectionType = {

}

type HandleVoteType = (selected: number) => void;

function VotingSection(props: VotingSectionType) {
  const [[first, second], setPokemons] = React.useState(getOptionsForVote());

  const firstPokemon = trpc.useQuery(["getPokemonById", { id: first }]);
  const secondPokemon = trpc.useQuery(["getPokemonById", { id: second }]);

  const voteForRoundest: HandleVoteType = (selected) => {
    setPokemons(getOptionsForVote());
  }

  return (
    <div className='p-8 flex justify-between max-w-2xl items-center'>
      <VotingPokemon response={firstPokemon} handleVote={() => voteForRoundest(first)} />
      <div className="p-8">
        Vs
      </div>
      <VotingPokemon response={secondPokemon} handleVote={() => voteForRoundest(second)} />
    </div>
  )
}

const VotingPokemon = ({ handleVote, response, ...rest }: { handleVote: (ev: React.MouseEvent<HTMLButtonElement>) => void, response: UseQueryResult<PokemonDataType> }) => {
  const { isLoading } = response;
  return (
    <div className="flex flex-col items-center">
      <div className='w-64 h-64'>
        <Pokemon response={response} {...rest} />
      </div>
      <Button disabled={isLoading} className="mt-10" onClick={handleVote}>Rounder</Button>
    </div>
  )
}

export default VotingSection