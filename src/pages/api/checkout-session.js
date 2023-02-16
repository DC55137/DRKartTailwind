import Stripe from 'stripe'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cart } = req.body
    try {
      // Create Checkout Sessions from body params.
      // let line_items = cart.map((item) => ({
      //   quantity: item.quantity,
      //   price: item.priceId,
      // }))
      // console.log(line_items)
      let line_items = [
        {
          price: 'price_1MatuhL7J6ZEojyOZPVxn1Pc',
          quantity: 1,
        },
      ]
      const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: `${req.headers.origin}/shop/payment?success=true`,
        cancel_url: `${req.headers.origin}/shop/payment?canceled=true`,
        automatic_tax: { enabled: true },
      })
      // res.setHeader('Access-Control-Allow-Origin', '*')
      // res.redirect(303, session.url)
      console.log(session.url)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
