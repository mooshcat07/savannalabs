"use client";

import { useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'

export default function Layout({ children } : { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/admin");
  }, []);
  
  return (
    <section>
      {children}
    </section>
  )
}
