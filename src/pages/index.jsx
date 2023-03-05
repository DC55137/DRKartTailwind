import { useEffect } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/home/Hero'
import { Introduction } from '@/components/home/Introduction'
import ShopCategory from '@/components/home/ShopCategory'

import RaceCalendar from '@/components/home/RaceCalendar'
import { useDispatch } from '@/redux/store'
import { useRouter } from 'next/router'
import { resetCart } from '@/redux/slices/product'
import Video from '@/components/home/Video'

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
        <Video />
        <Introduction />
        <ShopCategory />
        <RaceCalendar />
      </main>
      <Footer />
    </>
  )
}
