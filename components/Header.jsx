import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-primary text-white py-2 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/icons/logo_deitada.svg" 
            alt="Auto Ar Silvestrin Logo" 
            width={70} 
            height={70}
            className="w-auto h-24"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#sobre" className="hover:text-secondary transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-secondary transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header 