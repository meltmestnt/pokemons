const MAX_DEX_ID = 493;
export const getRandomPokemon = (notThisOne?: number): number => {
  const pokemonNumber = Math.floor(Math.random() * (MAX_DEX_ID - 1)) + 1;

  if (pokemonNumber !== notThisOne) return pokemonNumber;
  return getRandomPokemon(notThisOne);
}

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
}