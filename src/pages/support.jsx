import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Team from '@/components/support/Team'

export default function Support() {
  return (
    <>
      <Head>
        <title>DR Racing Kart Australia</title>
        <meta name="description" content="DR RACING AUSTRALIA" />
      </Head>
      <main>
        <Header />
        <Team />
      </main>
      <Footer />
    </>
  )
}
