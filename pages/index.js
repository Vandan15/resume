import Head from 'next/head'
import Image from 'next/image'
import MainPage from '../components/MainPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vandan Khamkar</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MainPage/>
    </div>
  )
}
