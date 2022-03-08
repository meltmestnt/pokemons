import * as trpc from '@trpc/server';
import { z } from 'zod';
import { PokemonClient } from 'pokenode-ts';
import { prisma } from './../utils/prisma';

export const appRouter = trpc.router().query("getPokemonById", {
  input: z.object({ id: z.number() }),
  async resolve({ input }) {
    const pokeApiClient = new PokemonClient();

    const pokemon = await pokeApiClient.getPokemonById(input.id);

    return {
      name: pokemon.name,
      sprites: {
        front_default: pokemon.sprites.front_default
      }
    };
  }
}).mutation("castVote", {
  input: z.object({
    votedFor: z.number(),
    votedAgainst: z.number(),
  }),
  async resolve({ input }) {

    const voteInDb = await prisma.vote.create({
      data: {
        ...input
      }
    })

    return {
      success: true,
      vote: voteInDb,
    }
  }
});

// export type definition of API
export type AppRouter = typeof appRouter;
