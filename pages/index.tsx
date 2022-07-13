import type { NextPage } from 'next'
import Head from 'next/head'
import Forms from '../components/forms'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Url Shortner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Forms  />     
    </div>
  )
}

export default Home
