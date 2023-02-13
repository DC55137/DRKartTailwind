import Stripe from 'stripe'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cart } = req.body
    console.log(req.body)
    try {
      // Create Checkout Sessions from body params.
      let line_items = cart.map((item) => ({
        quantity: item.quantity,
        Price_ID: item.priceId,
      }))
      console.log(line_items)
      // const session = await stripe.checkout.sessions.create({
      //   line_items: [
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: 'price_1MatuhL7J6ZEojyOZPVxn1Pc',
      //       quantity: 1,
      //     },
      //   ],
      //   mode: 'payment',
      //   success_url: `${req.headers.origin}/shop/payment?success=true`,
      //   cancel_url: `${req.headers.origin}/shop/payment?canceled=true`,
      //   automatic_tax: { enabled: true },
      // })
      // res.redirect(303, session.url)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
