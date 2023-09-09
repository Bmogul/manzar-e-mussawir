// import Navbar from '@/components/Navbar/navbar'
import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar/>
      <body>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}
