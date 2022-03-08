import type { NextPage } from 'next'
import Link from '../components/UI/Link'
import Title from './../components/UI/Title'
import VotingSection from './../components/VotingSection'
const Home: NextPage = () => {

  return (
    <div>
      <h1 className="h-screen w-screen flex flex-col justify-center items-center">
        <Title className='mb-8'>
          Which pokemon is rounder?
        </Title>
        <VotingSection />
        <div className='fixed bottom-4 right-4 scale-100'>
          <Link href="https://github.com">Github</Link>
        </div>
      </h1>
    </div>
  )
}

export default Home
