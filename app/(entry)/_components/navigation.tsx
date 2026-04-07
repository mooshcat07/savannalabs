"use client";

import { Button } from '@/components/ui/button';
import { Images } from '@/lib/assets'
import { BookOpenTextIcon, ChevronRight, ContactIcon, HomeIcon, LayoutDashboardIcon, LucideNewspaper, WalletIcon } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

export const navLink = [
  {title: "Home", href: "/", icon: <HomeIcon size={18} /> },
  {title: "About", href: "/about", icon: <BookOpenTextIcon size={18} /> },
  {title: "Blog", href: "/blog", icon: <LucideNewspaper size={18} /> },
  {title: "Pricing", href: "/pricing", icon: <WalletIcon size={18} /> },
  {title: "Newsletter", href: "/newsletter", icon: <ContactIcon size={18} /> },
];

export default function Navigation() {
  const pathname = usePathname();
  const SignedIn = false;

  return (
    <header className={`fixed w-[70%] p-2 overflow-hidden duration-200 ease-out left-1/2 -translate-x-1/2 top-3 flex items-center bg-white shadow-2xs justify-between z-50 rounded-full`}>
      <Link href={'/'} className='flex items-center gap-4'>
        <Image src={Images.SavannaLogo} alt='savanna logo' className='w-44 min-h-10' />
      </Link>
      <nav className='relative flex items-center justify-center gap-3 p-1 rounded-full'>
        {navLink.map((link, key) => {
          if(pathname === link.href) {
            return (
              <Link key={key} href={link.href} className='flex gap-2 bg-gray-500/5 rounded-full text-black font-medium duration-200 ease-in-out py-2 px-4 items-center text-sm'>
                {link.icon}
                {link.title}
              </Link>
            );
          }

          return (
            <Link key={key} href={link.href} className='flex hover:black text-zinc-500 font-medium gap-2 duration-200 ease-in-out py-2 px-3 text-sm'>{link.title}</Link>
          );
        })}
      </nav>
      <div className='flex gap-3'>
        {!SignedIn ? 
          <>
            <Link href={'/auth/sign-up'}>
              <Button variant={'ghost'} className='py-4.5'>
                Sign Up
                <ChevronRight />
              </Button>
            </Link>
            <Link href={'/auth/sign-in'}>
              <Button className='py-4.5 px-5 rounded-full'>Log In</Button>
            </Link>
          </> :
          <Link href={'/dashboard'} className='cursor-pointer'>
            <Button className='py-4.5 rounded-full'>
              <LayoutDashboardIcon />
              Dashboard
            </Button>
          </Link>
        }
      </div>
    </header>
  )
}
