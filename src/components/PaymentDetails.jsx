import { useEffect, useState } from 'react'
import { useDispatch } from '@/redux/store'
// form
import CartSummary from './CartSummary'

import { loadStripe } from '@stripe/stripe-js'

export default function Shipping({ checkout }) {
  const dispatch = useDispatch()

  const { cart: products } = checkout

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 hidden h-full w-1/2 bg-black lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <h1 className="sr-only">Checkout</h1>
        <CartSummary checkout={checkout} products={products} />
        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <div>
              <h3
                id="contact-info-heading"
                className="text-lg font-medium text-gray-900"
              >
                Contact information
              </h3>
              <div className="mt-6">
                <h1>Name: </h1>
                <p>{checkout.contactName}</p>
              </div>
              <div className="mt-6">
                <h1>Address: </h1>
                <p>{checkout.contactAddress}</p>
              </div>
              <div className="mt-6">
                <h1>Email: </h1>
                <p>{checkout.contactEmail}</p>
              </div>
            </div>

            <div className="mt-10 flex justify-between border-t border-gray-200 pt-6">
              <button className="rounded-md border border-transparent bg-main-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                Pay Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
