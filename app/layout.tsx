import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Testimonial Carousel',
  description: 'A modern, responsive testimonial carousel component',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
