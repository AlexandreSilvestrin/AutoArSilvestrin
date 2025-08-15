import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-primary text-white py-2 px-6 shadow-lg section-fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center animate-delay-200">
          <Image 
            src="/icons/logo_deitada.svg" 
            alt="Auto Ar Silvestrin Logo" 
            width={70} 
            height={70}
            className="w-auto h-24 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <nav className="hidden md:flex space-x-6 animate-delay-300">
          <a href="#sobre" className="hover:text-secondary transition-colors duration-300 hover:scale-105 transform">Sobre</a>
          <a href="#servicos" className="hover:text-secondary transition-colors duration-300 hover:scale-105 transform">Serviços</a>
          <a href="#contato" className="hover:text-secondary transition-colors duration-300 hover:scale-105 transform">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header 