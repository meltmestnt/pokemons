import type { NextPage } from 'next'
import { trpc } from '../utils/trpc'
import Title from './../components/UI/Title'
import VotingSection from './../components/VotingSection'
const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Den" }])

  if (isLoading) return <div>Loading...</div>

  else if (data) return <div>{data.greeting}</div>
  return (
    <div>
      <h1 className="h-screen w-screen flex flex-col justify-center items-center">
        <Title className='mb-8'>
          Which pokemon is rounder?
        </Title>
        <VotingSection />
      </h1>
    </div>
  )
}

export default Home
