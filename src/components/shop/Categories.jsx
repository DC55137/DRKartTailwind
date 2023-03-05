import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from '@/redux/store'
import { getProducts } from '@/redux/slices/product'
import { Icon } from '@iconify/react'
import CategorySelect from './CategorySelect'
import ProductCard from './ProductCard'
import Spinner from '../Spinner'

const tabs = [
  {
    value: 'Karts',
    name: 'Karts',
    icon: <Icon icon={'mdi:go-kart'} width={20} height={20} />,
  },
  {
    value: 'Parts',
    name: 'Parts',
    icon: <Icon icon={'clarity:tools-line'} width={20} height={20} />,
  },
  {
    value: 'Alfano',
    name: 'Alfano',
    icon: <Icon icon={'iconoir:electronics-chip'} width={20} height={20} />,
  },
  {
    value: 'NEK',
    name: 'NEK',
    icon: <Icon icon={'mdi:seat-passenger'} width={20} height={20} />,
  },
  {
    value: 'Clothing',
    name: 'Clothing',
    icon: <Icon icon={'map:clothing-store'} width={20} height={20} />,
  },
  {
    value: '',
    name: 'All',
    icon: <Icon icon={'bi:check-all'} width={20} height={20} />,
  },
]

export default function Categories() {
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector((state) => state.product)
  const [currentTab, setCurrentTab] = useState('Karts')

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts())
    }

    // Check URL params for "category" and set "currentTab" state accordingly
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get('category')
    if (
      categoryParam &&
      tabs.some(
        (tab) => tab.value.toLowerCase() === categoryParam.toLowerCase()
      )
    ) {
      setCurrentTab(categoryParam)
    }
  }, [dispatch, products, tabs])

  let filteredProducts
  if (currentTab === 'All') {
    filteredProducts = products
  } else {
    filteredProducts = products.filter(
      (product) => product.category === currentTab
    )
  }

  return (
    <div className="mt-40 ">
      {isLoading ? (
        <div className="flex h-1/2">
          <Spinner className="my-auto w-20" />
        </div>
      ) : (
        <>
          <CategorySelect
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />

          <ProductCard products={filteredProducts} />
        </>
      )}
    </div>
  )
}
