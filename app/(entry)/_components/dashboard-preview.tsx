import { ClipboardIcon, PencilIcon, RocketIcon, SettingsIcon } from 'lucide-react';
import Title from './title'
import React from 'react'
import ProcessCard from './process-card';
import Image from 'next/image';
import { Images } from '@/lib/assets';

export default function DashboardPreview() {
    const steps = [
        {
            id: 1,
            title: "Submit your project",
            description: "Tell us about your needs and goals.",
            icon: <ClipboardIcon size={19} color='#fff' />
        },
        {
            id: 2,
            title: "We plan & design",
            description: "We create a project roadmap and initial concepts.",
            icon: <PencilIcon size={19} color='#fff' />
        },
        {
            id: 3,
            title: "Build & track",
            description: "Development begins. Track your progress in real-time through our client dashboard.",
            icon: <SettingsIcon size={19} color='#fff' />
        },
        {
            id: 4,
            title: "Delivery & support",
            description: "We deliver your product, assist with deployment, and provide ongoing support.",
            icon: <RocketIcon size={19} color='#fff' />
        },
    ];

    return (
        <section className='relative px-8 bg-gray-50 py-10'>
            <Title
                slug='Our Quick Starting Process'
                heading='How It Works'
                subheading='Simple and Transparent development process'
            />
            <section className='flex items-center justify-between px-14'>
                <div className='basis-[45%] grid grid-cols-2 gap-7'>
                    {steps.map(step => 
                        <ProcessCard key={step.id} context={step} />
                    )}
                </div>
                <div className='basis-[45%] relative'>
                    <Image src={Images.Newsletter} alt='dashboard image' className='w-[90%]'  />
                </div>
            </section>
        </section>
    )
}
