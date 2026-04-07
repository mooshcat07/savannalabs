import React from 'react'
import Services from './_components/services'
import UniversalHero from './_components/universal-hero'
import { Images } from '@/lib/assets'
import DashboardPreview from './_components/dashboard-preview'
import OurWork from './_components/our-work'
import Testimonials from './_components/testimonials'

export default function page() {
  return (
    <section className='relative'>
      <UniversalHero
        backgroundImage={Images.Index}
        title={
          <h1 className='text-5xl font-medium'>
            We build digital <br />
            products that <em className='text-emerald-500'>grow</em> <br />
            your <span className='text-amber-500'>business</span>
          </h1>
        }
        subtitle='Websites, React Native apps, APIs and databases — crafted with care by a lean team that treats your project like their own.'
        badge='Built in Malawi · Serving Africa & beyond'
        cta1={{
          text: "Start a project",
          href: "/newsletter"
        }}
        cta2={{
          text: "See our work",
          href: "/about"
        }}
      />
      <Services />
      <DashboardPreview />
      <OurWork />
      <Testimonials />
    </section>
  )
}
