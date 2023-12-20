import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/sizing.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next JS Boilerplate',
  description:
    'The Next.js Project Boilerplate serves as a starting point for developing applications using Next.js. It leverages a modern tech stack, including TypeScript, Tailwind, Jest, React Testing Library, Storybook, Eslint, Prettier, and Husky.',
  icons: {
    icon: 'img/favicon/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
