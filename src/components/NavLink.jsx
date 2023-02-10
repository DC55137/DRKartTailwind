import { useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({ href, children, isOffset, className }) {
  return (
    <Link
      href={href}
      duration={100}
      className={clsx(
        `nav-link inline-block cursor-pointer rounded-lg py-1 font-bold transition-all duration-300 ease-in-out hover:text-main-200`,
        className,
        isOffset ? 'text-sm text-main-500' : 'text-lg text-main-500'
      )}
    >
      <div>{children}</div>
    </Link>
  )
}
