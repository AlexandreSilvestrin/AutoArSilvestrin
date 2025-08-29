import '../styles/globals.css'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppFloat />
      <Analytics />
    </>
  )
} 