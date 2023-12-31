import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlexiFit',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"text-2xs lg:text-xs xl:text-sm 2xl:text-md 3xl:text-lg bg-nord4"}>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
