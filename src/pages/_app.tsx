import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div >
     <Layout><Component {...pageProps} /></Layout>
     </div>
  )
}
