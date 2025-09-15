import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Journey - My Learning Path',
  description: 'A showcase of my journey learning AI and machine learning tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" alt="" referrerpolicy="no-referrer-when-downgrade"/></noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
