import React from 'react'
import Title from './title'

export default function OurWork() {
  return (
    <section className='py-4 relative'>
      <Title 
        slug='Our Work'
        heading='Recent Projects'
        subheading='Showcasing the digital products, websites, apps, and APIs we create for our clients.'
      />
      <section>
        <h2 className='text-center'>No Projects</h2>
      </section>
    </section>
  )
}