import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
   return (
      <header className='w-full border-b'>
         <div className=" py-3 px-5 flex items-center justify-between ">
            <Link href={'/'} className=''>
               <Image
                  src={"/assets/images/logo.png"}
                  width={60}
                  height={0}
                  alt='logo'
               />
            </Link>

            <div className="">
               <SignedIn>
                  <UserButton afterSignOutUrl='/' />
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