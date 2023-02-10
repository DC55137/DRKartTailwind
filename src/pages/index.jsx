import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { RoofReplacement } from '@/components/RoofReplacement'
import Contact from '@/components/Contact'
import RaceCalendar from '@/components/RaceCalendar'

export default function Home() {
  return (
    <>
      <Head>
        <title>CBMR - Metal Roofing | Gold Coast Brisbane </title>
        <meta
          name="description"
          content="CBMR specializes in metal roofing installation, repair, and asbestos roofing services. Contact us for quality workmanship and exceptional customer service"
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <RaceCalendar />
        <Introduction />
      </main>
      <Footer />
    </>
  )
}
