import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const whatsappLink = "https://wa.me/551123352141"
    window.open(whatsappLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 sm:h-24 md:h-28 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
        : 'bg-primary'
    }`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image 
              src="/icons/logo_deitada.svg" 
              alt="Auto Ar Silvestrin Logo" 
              width={70} 
              height={70}
              className="w-auto h-16 md:h-20 transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden md:block">
              <h1 className={`text-lg font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Auto Ar Silvestrin
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Especialistas em Veículos
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#sobre" 
              className={`font-medium transition-all duration-300 hover:text-secondary transform hover:scale-105 ${
                isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
              }`}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className={`font-medium transition-all duration-300 hover:text-secondary transform hover:scale-105 ${
                isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
              }`}
            >
              Serviços
            </a>
            <a 
              href="#contato" 
              className={`font-medium transition-all duration-300 hover:text-secondary transform hover:scale-105 ${
                isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
              }`}
            >
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-secondary" />
              <span className={isScrolled ? 'text-primary' : 'text-white'}>
                (11) 2335-2141
              </span>
            </div>
            <button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp cursor-pointer"
            >
              <Image 
                src="/icons/whatsapp.png" 
                alt="WhatsApp" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#sobre" 
                className="text-primary font-medium py-2 hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                className="text-primary font-medium py-2 hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#contato" 
                className="text-primary font-medium py-2 hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-sm text-primary mb-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>(11) 2335-2141</span>
                </div>
                <button 
                  onClick={handleWhatsAppClick}
                  className="btn-whatsapp w-full justify-center cursor-pointer"
                >
                  <Image 
                    src="/icons/whatsapp.png" 
                    alt="WhatsApp" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                  WhatsApp
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 