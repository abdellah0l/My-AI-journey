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
      <body className={inter.className}>
        <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-lg font-semibold text-gray-900">AI Journey</a>
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <a className="hover:text-gray-900" href="/">Home</a>
              <a className="hover:text-gray-900" href="/#projects">Projects</a>
            </nav>
          </div>
        </header>
        {children}
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" alt="" referrerPolicy="no-referrer-when-downgrade"/></noscript>
      </body>
    </html>
  )
}
