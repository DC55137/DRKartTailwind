import React, { useEffect } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '@/redux/slices/product'
import { Container } from '@/components/Container'

import PaymentDetails from '@/components/shop/PaymentDetails'

export default function Checkout() {
  const dispatch = useDispatch()
  const router = useRouter()

  const { checkout } = useSelector((state) => state.product)
  const { cart } = checkout
  useEffect(() => {
    dispatch(getCart(cart))
  }, [dispatch, cart])

  return (
    <>
      <Head>
        <title>Cart </title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Header />
        <Container className="pt-20">
          <PaymentDetails checkout={checkout} cart={cart} />
        </Container>
      </main>
      <Footer />
    </>
  )
}
