import { Fragment, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import DRLogo from '@/images/DRLogo.svg'
import { useSelector } from 'react-redux'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import useOffSetTop from '@/hooks/useOffSetTop'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-main-100"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-50 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/support">Support</MobileNavLink>
            <MobileNavLink href="/shop">Shop</MobileNavLink>
            <MobileNavLink href="/driver">Drivers</MobileNavLink>
            <MobileNavLink href="/gallery">Gallery</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const { checkout } = useSelector((state) => state.product)
  let count = 0

  checkout.cart.forEach((item) => (count += item.quantity))
  let navBarRef = useRef()

  const isOffset = useOffSetTop(20)
  return (
    <header
      ref={navBarRef}
      className={clsx(
        `fixed top-0 z-40 flex w-screen items-center border-b-4 border-b-metal transition-all duration-300 ease-in-out`,
        isOffset
          ? 'h-16 bg-gray-800 bg-opacity-70 text-sm'
          : 'h-24 bg-black text-lg'
      )}
    >
      <Container>
        <nav className={clsx('z-40 flex items-center justify-between')}>
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image
                src={DRLogo}
                alt="DR Logo"
                className="h-16 w-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/support">Support</NavLink>
              <NavLink href="/drivers">Drivers</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href={'/shop'}
              className=" mx-2 inline-flex items-center rounded-full border border-transparent bg-main-500 px-3.5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-main-700 "
            >
              Shop Now
            </Link>
            <Link
              href={'/shop/cart'}
              className="mx-2 inline-flex items-center rounded-full border border-transparent bg-main-500 px-3.5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-main-700 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {count}
            </Link>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
