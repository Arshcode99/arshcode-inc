import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter, Comfortaa } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Arshcode | Reviving Your Online Presence With Scalable Solutions',
  description: 'Your trusted partner in web development and digital solutions. We provide customized web development services and digital products that help businesses grow and thrive in the digital age. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
        </body>
    </html>
  )
}
