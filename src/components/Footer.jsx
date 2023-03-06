import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="relative bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-col justify-center gap-x-6 text-center sm:flex-row">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/support">Support</NavLink>
              <NavLink href="/drivers">Drivers</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.facebook.com/profile.php?id=100085597207506"
              className="group"
              aria-label="CBMR on Facebook"
            >
              <BsFacebook className="h-6 w-6 fill-slate-500" />
            </Link>
            <Link
              href="https://www.instagram.com/dr_kart_australia/"
              className="group"
              aria-label="CBMR on Instagram"
            >
              <BsInstagram className="h-6 w-6 fill-slate-500" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} CBMR. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
