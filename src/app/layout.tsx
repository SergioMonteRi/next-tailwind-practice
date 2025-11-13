import './globals.css'

import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import { Sidebar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Untitled UI',
  description: 'A modern and beautiful UI for your next project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={twMerge(
            'lg:grid-cols-app min-h-screen lg:grid',
            'dark:bg-zinc-900',
          )}
        >
          <Sidebar />

          <main className="min-w-0 px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8 lg:pb-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
