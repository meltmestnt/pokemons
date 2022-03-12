import { NextPage } from 'next';
import type { GetServerSideProps } from 'next';
import React from 'react';
import { prisma } from './../backend/utils/prisma';
import PokemonList from '../components/PokemonList';
import { HashLoader } from 'react-spinners';
import Link from 'next/link';

const getPokemonInOrder = () =>
    prisma.pokemon.findMany({
        orderBy: {
            votesFor: { _count: 'desc' },
        },
        select: {
            id: true,
            name: true,
            spriteUrl: true,
            _count: {
                select: {
                    votesFor: true,
                    votesAgainst: true,
                },
            },
        },
    });
export type Pokemon = {
    pokemon: Awaited<ReturnType<typeof getPokemonInOrder>>;
};
const Rankings: NextPage<Pokemon> = function Rankings({ pokemon }) {
    if (!pokemon?.length) return (
      <div className="fixed inset-0 flex items-center justify-center">
        <HashLoader size={64} />
      </div>
    )
    return (
      <div className='flex flex-col p-8'>
        <Link href='/' >
          <a href="" className='inline-block w-fit mb-4 font-bold text-2xl transition-all hover:text-white text-slate-200 active:scale-90'>
            &lt; Go back
          </a>
        </Link>
        <PokemonList pokemon={pokemon} />
      </div>
    );
};

export const getStaticProps: GetServerSideProps = async () => {
    const pokemonOrdered = await getPokemonInOrder();
    console.log(pokemonOrdered);
    return { props: { pokemon: pokemonOrdered }, revalidate: 60 };
};

export default Rankings;
