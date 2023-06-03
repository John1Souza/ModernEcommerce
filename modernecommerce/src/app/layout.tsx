"use client"

import Header  from '@/components/header/header'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/Footer/footer'

const poppins = Poppins({
   weight: ["500", "400", "300", "600"], 
   subsets: ['latin']
  })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
