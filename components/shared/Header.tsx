import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
   return (
      <header className='w-full border-b'>
         <div className=" wrapper flex items-center justify-between ">
            <Link href={'/'} className=''>
               <Image
                  src={"/assets/images/logo.png"}
                  width={60}
                  height={0}
                  alt='logo'
               />
            </Link>

            <SignedIn>
               <nav className='hidden md:flex-between max-w-xs w-full '>
                  <NavItems />
               </nav>
            </SignedIn>

            <div className="flex gap-3 w-36 justify-end ">
               <SignedIn>
                  <UserButton afterSignOutUrl='/' />
                  <MobileNav />
               </SignedIn>
               <SignedOut>
                  <Button asChild className='rounded-full' size={'lg'}>
                     <Link href={'/sign-in'}>
                        Login
                     </Link>
                  </Button>
               </SignedOut>
            </div>
         </div>
      </header>
   )
}

export default Header