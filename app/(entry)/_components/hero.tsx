import { Button } from '@/components/ui/button'
import { ChevronRightIcon, PresentationIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ratings = [
  { num: "15+", label: "Projects delivered" },
  { num: "4", label: "Services offered" },
  { num: "100%", label: "Client satisfaction" }
];
export default function Hero() {

  return (
    <section className='relative py-[10%]'>
      <section className='relative items-center justify-center gap-12 grid text-center'>
        <div className='flex items-center justify-center'>
          <span className='inline-flex rounded-full bg-gray-50 p-2 px-5 items-center gap-6 text-sm relative shadow-md'>
            <PresentationIcon />
            Built in Malawi · Serving Africa & beyond
          </span>
        </div>
        <section className='flex flex-col gap-10'>
          <div className='grid gap-4'>
            <h1 className='text-5xl font-medium'>
              We build digital <br />
              products that <em className='text-emerald-500'>grow</em> <br />
              your <span className='text-amber-500'>business</span>
            </h1>
            <p className='text-sm text-zinc-800'>Websites, React Native apps, APIs and databases — crafted with care by a lean team that treats your project like their own.</p>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <Link href="/newsletter">
              <Button variant={'outline'} className='py-5 px-7 inline-flex gap-3'>
                Start a project
                <ChevronRightIcon />
              </Button>
            </Link>
            <Link href="/about">
              <Button className={'py-5 px-7'}>See our work</Button>
            </Link>
          </div>
        </section>
        <section className='flex gap-7 items-center justify-center'>
          {ratings.map((rate, key) => {
            return(
              <div key={key} className='p-3 relative grid gap-2'>
                <p className='text-4xl font-semibold'>{rate.num}</p>
                <p className='text-sm'>{rate.label}</p>
              </div>
            )
          })}
        </section>
      </section>
    </section>
  )
}
