import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '@/redux/slices/product'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST
)
export default function CheckoutForm({ cart }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('/api/checkout-session', {
      method: 'POST',
      body: JSON.stringify({
        cart: cart,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Network response was not ok.')
        }
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }

  return (
    <form className="relative z-20 inline-block" onSubmit={handleSubmit}>
      <section>
        <button
          className='className="inline-flex focus:ring-offset-2" items-center rounded-md border border-transparent bg-main-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500'
          type="submit"
          role="link"
        >
          Checkout
        </button>
      </section>
    </form>
  )
}
