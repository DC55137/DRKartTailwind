import React from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Categories from '@/components/shop/Categories'
import { Container } from '@/components/Container'

export default function shop() {
  return (
    <>
      <Head>
        <title>DR Kart Australia - Shop page </title>
        <meta
          name="description"
          content="CBMR specializes in metal roofing installation, repair, and asbestos roofing services. Contact us for quality workmanship and exceptional customer service"
        />
      </Head>
      <main>
        <Header />
        <Container>
          <Categories />
        </Container>
      </main>
      <Footer />
    </>
  )
}
