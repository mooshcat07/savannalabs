import React from 'react'

export default function Title({ slug, heading, subheading } : { slug?: string, heading: string, subheading?: string}) {
  
    return (
        <section className='text-center py-10 flex flex-col gap-6 items-center justify-center'>
            <span className='text-zinc-900 p-1.5 text-sm bg-white px-2 inline-flex items-center gap-2 rounded-lg shadow-sm'>
                <span className='relative w-1 h-1 rounded-full bg-black' />
                {slug}
            </span>
            <div className='flex flex-col items-center gap-3 text-center justify-center'>
                <h2 className='text-4xl font-semibold max-w-150'>{heading}</h2>
                {subheading && 
                    <p className='text-sm text-zinc-800 max-w-170'>{subheading}</p>
                }
            </div>
        </section>
    )
}
