import React, { ReactNode } from 'react'
import Navigation from './_components/navigation'

export default function EntryLayout({ children }: { children: ReactNode }) {
  return (
    <main className='relative w-full min-h-screen'>      
      <div className='relative'>
        <Navigation />
      </div>
      <section className=''>
        {children}
      </section>
    </main>
  )
}