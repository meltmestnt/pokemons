import * as trpc from '@trpc/server';
import { z } from 'zod';
import { PokemonClient } from 'pokenode-ts';

export const appRouter = trpc.router().query("getPokemonById", {
  input: z.object({ id: z.number() }),
  async resolve({ input }) {
    const api = new PokemonClient();

    const pokemon = await api.getPokemonById(input.id);

    return {
      name: pokemon.name,
      sprites: {
        front_default: pokemon.sprites.front_default
      }
    };
  }
});

// export type definition of API
export type AppRouter = typeof appRouter;
