import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
export default function CheckoutForm({ cart }) {
  React.useEffect(() => {
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

  const serializedCart = JSON.stringify(cart)

  return (
    <form
      className="relative z-20 inline-block"
      action="/api/checkout_session"
      method="POST"
    >
      <input type="hidden" name="cart" value={serializedCart} />
      <section>
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-main-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2"
          type="submit"
          role="link"
        >
          Confirm Checkout
        </button>
      </section>
    </form>
  )
}
