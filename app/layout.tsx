import SideBar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

// Inter to Figtree from google font and use in our root app file
export const metadata: Metadata = {
  title: 'Spotify Clone', // change title of the app 
  description: 'Listen to music!', // descrption of the title
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>
        {children}
        </SideBar>
        </body>
    </html>
  )
}

// Here's an explanation of what's happening:
// RootLayout is a React component that is intended to serve as a layout or wrapper for other components in your Next.js application. It wraps its child components in a structure that includes an HTML document with an <html> tag and a <body> tag.
// The { children } syntax in the function parameter is known as destructuring. In this context, it means that the RootLayout component expects an object as its argument, and that object should have a property named children. The children property should be of type React.ReactNode.
