import { Tab } from '@headlessui/react'
import { addCart, resetCart } from '@/redux/slices/product'

import { useDispatch } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDisplay({ product, cart }) {
  const alreadyProduct = cart.map((item) => item._id).includes(product._id)
  const dispatch = useDispatch()

  const handleAddCart = (product) => {
    dispatch(
      addCart({
        quantity: 1,
        ...product,
        subtotal: product.price,
      })
    )
  }
  return (
    <div className="mt-20 bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image, index) => (
                  <Tab
                    key={index}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image}
                            alt="Product Images"
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-main-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
              {product.images.map((image, index) => (
                <Tab.Panel key={index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 text-base text-gray-700">
                {product.description}
              </div>
            </div>

            <div className="sm:flex-col1 mt-10 flex">
              <button
                onClick={() => handleAddCart(product)}
                className="mx-1 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-main-600 py-3 px-8 text-base font-medium text-white hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:mx-4 sm:w-full"
              >
                Add to Cart
              </button>
              <button
                onClick={() => dispatch(resetCart())}
                className="mx-1 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-main-600 py-3 px-8 text-base font-medium text-white hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full md:mx-4"
              >
                Reset Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
