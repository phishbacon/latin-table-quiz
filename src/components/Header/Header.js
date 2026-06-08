import React from 'react'
import Link from 'next/link'

const navLinkClass = 'rounded-md px-3 py-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground'

const Header = ({ user }) => (
  <header className='bg-primary text-primary-foreground'>
    <div className='container mx-auto flex flex-wrap items-center gap-4 px-4 py-3'>
      <Link href='/' className='text-lg font-semibold'>
        Latin Table Quiz
      </Link>
      <nav className='ml-auto flex flex-wrap items-center gap-2'>
        {user && (
          <span className='mr-2 text-sm text-primary-foreground/80'>
            Welcome, {user.email}
          </span>
        )}
        <Link href='/' className={navLinkClass}>Home</Link>
        {user && (
          <>
            <Link href='/change-password' className={navLinkClass}>Change Password</Link>
            <Link href='/sign-out' className={navLinkClass}>Sign Out</Link>
          </>
        )}
      </nav>
    </div>
  </header>
)

export default Header
