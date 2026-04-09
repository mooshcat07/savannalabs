import { Button } from '@/components/ui/button'
import { ChevronRightIcon, PresentationIcon } from 'lucide-react'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface HeroProps {
    backgroundImage?: StaticImport
    title?: ReactNode
    badge?: string
    subtitle?: string
    cta1?: { text: string; href: string }
    cta2?: { text: string; href: string }
}

export default function UniversalHero({ backgroundImage, badge, title, subtitle, cta1, cta2 }: HeroProps) {

    return (
        <section className='w-full relative grid pt-32 gap-6 bg-linear-to-br from-white via-slate-100 to-blue-100"'>
            <section className='relative items-center justify-center gap-12 grid text-center'>
                <div className='flex items-center justify-center'>
                    <span className='inline-flex rounded-full bg-white p-2 px-5 items-center gap-6 text-sm relative shadow-md'>
                        <PresentationIcon />
                        {badge}
                    </span>
                </div>
                <section className='flex flex-col gap-10 items-center'>
                    <div className='grid gap-4'>
                        {title}
                        <p className='text-sm text-zinc-800'>{subtitle}</p>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <Link href={cta1?.href as string}>
                            <Button variant={'outline'} className='py-5 px-7 inline-flex gap-3'>
                                {cta1?.text}
                                <ChevronRightIcon />
                            </Button>
                        </Link>
                        <Link href={cta2?.href as string}>
                            <Button className={'py-5 px-7'}>{cta2?.text}</Button>
                        </Link>
                    </div>
                </section>
            </section>
            <div className='w-full h-[70vh]'>
                <Image src={backgroundImage as StaticImport} alt='savanna logo' className='w-full h-full object-contain' />
            </div>
        </section>
    )
}
