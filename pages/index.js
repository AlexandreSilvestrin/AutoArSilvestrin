import Head from 'next/head'
import Header from '../components/Header'
import Sobre from '../components/Sobre'
import Servicos from '../components/Servicos'
import Marcas from '../components/Marcas'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Auto Ar Silvestrin</title>
        <meta name="description" content="Auto Ar Silvestrin - Oficina especializada em manutenção e reparo de veículos. Serviços de qualidade com profissionais qualificados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo_icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icons/logo_icon.png" />
        <link rel="apple-touch-icon" href="/icons/logo_icon.png" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <Sobre />
        <Servicos />
        <Marcas />
        <Contato />
        <Footer />
      </main>
    </>
  )
} 