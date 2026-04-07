"use client";
import React, { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface CardProps {
  no: string
  title: string
  desc: string
  icon: ReactNode
  iconBg?: string
  featured?: boolean
}

export default function Card({ contents }: { contents: CardProps }) {
  const featured = contents.featured ?? false

  return (
    <div className={`relative flex flex-col gap-5 rounded-2xl p-7 text-start max-w-96 h-full transition-all duration-200 cursor-pointer group bg-white border border-neutral-200 hover:border-neutral-300`}>
      <span className={`absolute top-6 right-6 text-xs font-medium text-white/20`}>
        {contents.no}
      </span>
      <div className='w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0'
        style={{ background: contents.iconBg ?? '#E1F5EE' }}>
        {contents.icon}
      </div>
      <div className='flex flex-col gap-2 flex-1'>
        <h4 className={`text-[16px] font-medium
          ${featured ? 'text-white' : 'text-neutral-900'}`}>
          {contents.title}
        </h4>
        <p className={`text-[13px] leading-relaxed font-light
          ${featured ? 'text-white/50' : 'text-neutral-500'}`}>
          {contents.desc}
        </p>
      </div>
      <div className='flex justify-end'>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center
          transition-colors duration-150
          ${featured
            ? 'bg-white/10 text-white/60 group-hover:bg-white/20'
            : 'bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200'
          }`}>
          <ArrowUpRight size={14} />
        </div>
      </div>

    </div>
  )
}