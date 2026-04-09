import React, { ReactNode } from 'react'

interface ContextProps {
  context: {
    id: number,
    title: string,
    description: string,
    icon: ReactNode
  }
}
export default function ProcessCard({ context } : ContextProps) {
  
  return (
    <section className='p-4 rounded-lg relative border grid gap-4 bg-white hover:shadow cursor-pointer'>
      <div className='flex items-center justify-between'>
        <div className='p-2 rounded-lg bg-sky-950'>
          {context.icon}
        </div>
        <p className='text-sm text-zinc-700'>0{context.id}</p>
      </div>
      <div>
        <h4 className='text-lg font-semibold'>{context.title}</h4>
        <p className='text-sm mt-2 text-gray-600'>{context.description}</p>
      </div>
    </section>
  )
}
