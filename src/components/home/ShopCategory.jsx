import React from 'react'
import Link from 'next/link'

const categories = [
  {
    name: 'Karts',
    href: '/shop?category=Karts',
    imageSrc:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1642555725/Dr%20Kart/products/J90%28DD%29/DSC06374-Edit-1-scaled_qhdjmd.jpg',
  },
  {
    name: 'Parts',
    href: '/shop?category=Parts',
    imageSrc:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1645767773/Dr%20Kart/products/SingeImage/DR_SEAT_SORF_OR_HARD_dqpk05.png',
  },
  {
    name: 'Alfano',
    href: '/shop?category=Alfano',
    imageSrc:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1642735022/Dr%20Kart/Alfano/Alfano%20Systems/ALFANO%206%202T/Alfano-6-with-cylinder-head-temperature-sensor_fwodpm.jpg',
  },
  {
    name: 'Nek',
    href: '/shop?category=Nek',
    imageSrc:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1642742746/Dr%20Kart/Nek/IMG_0016-2_z5ir31.jpg',
  },
  {
    name: 'Clothing',
    href: '/shop?category=Clothing',
    imageSrc:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1677816176/Dr%20Kart/clothing/polo-copy-scaled_yxgvdf.jpg',
  },
]

export default function ShopCategory() {
  return (
    <section
      aria-labelledby="category-heading"
      className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop by Category
        </h2>
        <Link
          href="/shop"
          className="hidden text-sm font-semibold text-main-600 hover:text-main-500 sm:block"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={category.imageSrc}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl font-bold text-white">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 sm:hidden">
        <Link
          href="/shop"
          className="block text-sm font-semibold text-main-600 hover:text-main-500"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </section>
  )
}
