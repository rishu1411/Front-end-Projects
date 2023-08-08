import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ShopContextProvider } from './Context/ShopState'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Shop - Home',
  description: 'Your personalized shopping site',
}

export default function RootLayout({ children } ) {
  return (
    <html lang="en">
      
      <body className={inter.className} >
        <ShopContextProvider>
      <Navbar title={'Home'} nav_2={'Settings'} nav_3={'Analytics'} />
          {children}
          </ShopContextProvider>
      </body>
    </html>
  )
}
