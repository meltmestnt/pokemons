import React from 'react'
import Pokemon from './Pokemon'

type VotingSectionType = {

}

function VotingSection(props: VotingSectionType) {
  return (
    <div className='p-8 flex justify-between max-w-2xl items-center'>
      <Pokemon></Pokemon>
      <div className="p-8">
        Vs
      </div>
      <Pokemon></Pokemon>
    </div>
  )
}

export default VotingSection