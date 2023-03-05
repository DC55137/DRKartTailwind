import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '@/redux/slices/product'
import { Container } from '@/components/Container'
import ProductDisplay from '@/components/shop/ProductDisplay'
import Spinner from '@/components/Spinner'

export default function ViewProduct() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    dispatch(getProduct(id)).then((res) => setLoading(false))
  }, [dispatch, id])

  const { product, isLoading, checkout } = useSelector((state) => state.product)

  return (
    <>
      <Head>
        <title>DR Racing Kart Australia </title>
        <meta
          name="description"
          content="CBMR specializes in metal roofing installation, repair, and asbestos roofing services. Contact us for quality workmanship and exceptional customer service"
        />
      </Head>
      <main>
        <Header />
        <Container>
          {loading ? (
            <div className="flex ">
              <Spinner className="my-40 w-20" />
            </div>
          ) : (
            <ProductDisplay product={product} cart={checkout.cart} />
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}
