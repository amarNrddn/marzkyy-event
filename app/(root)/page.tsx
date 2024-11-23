import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col gap-8">
            <h1 className='h1-bold'>Investasi untuk Masa Depan Dimulai dengan Satu Kelas.</h1>
            <p className='p-regular-20 md:p-regular-24'>Pesan dan pelajari kiat bermanfaat dari 3.168+ mentor di perusahaan kelas dunia dengan komunitas global kami.</p>

            <Button size={'lg'} asChild className='button sm:w-fit'>
              <Link href={"#event"}>
                Jelajahi Sekarang
              </Link>
            </Button>
          </div>

          <Image
            src={'/assets/images/hero.png'}
            width={1000}
            height={1000}
            alt='hero'
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
          />
        </div>
      </section>
    </>
  )
}
