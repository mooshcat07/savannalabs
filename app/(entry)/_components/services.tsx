import React from 'react'
import Title from './title'
import { Button } from '@/components/ui/button'
import { DatabaseIcon, Monitor, PhoneIcon, PlugIcon, SmartphoneIcon } from 'lucide-react'
import Link from 'next/link'
import Card from './card'

export default function Services() {
    const services = [
        { no: "01", title: "Web development", desc: "Fast, modern websites and web apps built with Next.js — optimised for search engines, performance and conversions.", icon: <Monitor size={20} /> },
        { no: "02", title: "Mobile apps", desc: "Cross-platform iOS and Android apps using React Native and Expo — one codebase, two stores, full native feel.", icon: <SmartphoneIcon size={20} /> },
        { no: "03", title: "APIs & backends", desc: "Scalable REST and real-time APIs built on Node.js and Supabase — secure, documented and ready to integrate.", icon: <PlugIcon size={20} /> },
        { no: "04", title: "Database design", desc: "Well-structured relational and real-time databases using Supabase and PostgreSQL — built to scale with your business.", icon: <DatabaseIcon size={20} /> },
    ];

    return (
        <section className='grid items-center justify-center text-center py-5'>
            <Title
                slug='What we do'
                heading='Everything your business needs to go digital' 
                subheading='From a simple landing page to a full-scale platform — we handle the entire stack so you can focus on growing.' 
            />
            <section className='grid grid-cols-2 py-5 gap-5'>
                {services.map(service => 
                    <Card key={service.no} contents={service} />
                )}
            </section>
            <section className='py-10'>
                <h3 className='text-sm mb-3'>Not sure what you need? Let`s talk it through — no commitment.</h3>
                <Link href={'/newsletter'}>
                    <Button variant={'default'} className={'py-5.5 px-7'}>
                        <PhoneIcon />
                        <span className='ml-3 font-medium'>Book a free call</span>
                    </Button>
                </Link>
            </section>
        </section>
    )
}
