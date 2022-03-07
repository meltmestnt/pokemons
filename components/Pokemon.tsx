import React from 'react'

type PokemonType = {
  children?: React.ReactNode
}

function Pokemon(props: PokemonType) {
  return (
    <div className="" {...props}></div>
  )
}

export default Pokemon