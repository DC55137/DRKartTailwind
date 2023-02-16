import { useEffect } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { RoofReplacement } from '@/components/RoofReplacement'
import Contact from '@/components/Contact'
import RaceCalendar from '@/components/RaceCalendar'
import { useDispatch } from '@/redux/store'
import { useRouter } from 'next/router'
import { resetCart } from '@/redux/slices/product'

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { payment } = router.query
  useEffect(() => {
    if (payment === 'success' || payment === 'failed') {
      dispatch(resetCart())
    }
  }, [payment, dispatch])

  return (
    <>
      <Head>
        <title>DR Racing Kart Australia</title>
        <meta name="description" content="DR RACING AUSTRALIA" />
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
