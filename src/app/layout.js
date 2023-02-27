import Footer from '@/components/shared/Footer/Footer'
import Navber from '@/components/Shared/Navber/Navber'
import TopNavber from '@/components/Shared/Navber/TopNavber'
import './globals.css'
import Home from '../pages/home/index'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head />
      <body className=''>
        <TopNavber />
        <Navber />
        <main>
          {/* {children} */}
          <Home />
        </main>
        <Footer />
      </body>
    </html>
  )
}
