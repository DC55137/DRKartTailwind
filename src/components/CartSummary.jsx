import React from 'react'

export default function CartSummary({ checkout, products }) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="bg-black py-12 text-main-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
    >
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>

        <dl>
          <dt className="text-sm font-medium">Amount due</dt>
          <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
            {checkout.total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </dd>
        </dl>

        <ul
          role="list"
          className="divide-y divide-white divide-opacity-10 text-sm font-medium"
        >
          {products.map((product) => (
            <li key={product._id} className="flex items-start space-x-4 py-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.cover}
                alt={product.name}
                className="h-20 w-20 flex-none rounded-md object-cover object-center"
              />
              <div className="flex-auto space-y-1">
                <h3 className="text-white">{product.name}</h3>
                <h3 className="text-white">{product.quantity}</h3>
              </div>
              <p className="flex-none text-base font-medium text-white">
                {product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </li>
          ))}
        </ul>

        <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
          <div className="flex items-center justify-between">
            <dt>Subtotal</dt>
            <dd>
              {' '}
              {checkout.subtotal.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt>Shipping</dt>
            <dd>
              {' '}
              {checkout.shipping.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt>Taxes</dt>
            <dd>
              {' '}
              {(checkout.subtotal * 0.1).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </dd>
          </div>

          <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
            <dt className="text-base">Total</dt>
            <dd className="text-base">
              {' '}
              {checkout.total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
