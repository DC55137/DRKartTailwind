const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const cartObject = JSON.parse(req.body.cart)
    try {
      // Create Checkout Sessions from body params.
      let line_items = cartObject.map((item) => ({
        quantity: item.quantity,
        price: item.priceId,
      }))

      const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: `${req.headers.origin}?payment=success`,
        cancel_url: `${req.headers.origin}?payment=failed`,
        automatic_tax: { enabled: true },
        shipping_address_collection: {
          allowed_countries: ['AU'],
        },
        phone_number_collection: {
          enabled: true,
        },
      })
      res.redirect(303, session.url)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
