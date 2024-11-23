import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
   return (
      <footer className='border-t'>
         <div className="flex-center wrapper flex flex-col gap-4 p-5 text-center md:flex-row">
            <Link href={'/'}>
               <Image
                  src={'/assets/images/logo.png'}
                  width={60}
                  height={30}
                  alt='logo'
               />
            </Link>
            <p>2024 Marzkyy. All Rights reserved</p>
         </div>
      </footer>
   )
}

export default Footer