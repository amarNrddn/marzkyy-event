import React from 'react'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'
import NavItems from './NavItems'

const MobileNav = () => {
   return (
      <nav className='md:hidden'>
         <Sheet>
            <SheetTrigger>
               <Image
                  src={'/assets/icons/menu.svg'}
                  width={28}
                  height={30}
                  alt='menu'
               />
            </SheetTrigger>
            <SheetContent className='flex flex-col bg-white gap-6 md:hidden'>
               <Image
                  src={'/assets/images/logo.png'}
                  width={60}
                  height={38}
                  alt='logo'
               />
               <Separator className='border border-gray-50' />
               <NavItems />
            </SheetContent>
         </Sheet>
      </nav>
   )
}

export default MobileNav