import React from 'react'
import Image from 'next/image'
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ]

  const services = [
    'Ar Condicionado',
    'Auto Elétrico',
    'Radiador',
    'Troca de Óleo',
    'Polimento de Farol',
    'Baterias'
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 2335-2141 - Telefone e WhatsApp', href: 'tel:1123352141' },
    { icon: MapPin, text: 'Av. Maria Estela, 55 - Jardim Maria Estela, São Paulo - SP', href: 'https://maps.app.goo.gl/UKcaoea5cXCBzGsg7' },
    { icon: Clock, text: 'Seg-Sex: 8h às 17h | Sáb: 8h às 12h15' }
  ]

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        {/* Mobile: Apenas Informações de Contato */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image 
                src="/icons/logo_deitada.svg" 
                alt="Auto Ar Silvestrin Logo" 
                width={50} 
                height={50}
                className="w-auto h-12"
              />
              <div>
                <h3 className="text-lg font-bold">Auto Ar Silvestrin</h3>
                <p className="text-sm text-slate-300">Especialistas em Veículos</p>
              </div>
            </div>
          </div>
          
          {/* Contato Mobile */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Informações de Contato</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <info.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-slate-300 hover:text-secondary transition-colors duration-300 text-sm text-center"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm text-center">
                      {info.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Layout Completo */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image 
                src="/icons/logo_deitada.svg" 
                alt="Auto Ar Silvestrin Logo" 
                width={50} 
                height={50}
                className="w-auto h-12"
              />
              <div>
                <h3 className="text-lg font-bold">Auto Ar Silvestrin</h3>
                <p className="text-sm text-slate-300">Especialistas em Veículos</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mais de 30 anos de experiência no mercado automotivo, oferecendo 
              serviços de qualidade com profissionais qualificados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Informações de Contato</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-slate-300 hover:text-secondary transition-colors duration-300 text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm">
                      {info.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © {currentYear} Auto Ar Silvestrin.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                CNPJ: 64.652.647/0001-80
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                Desenvolvido por{' '}
                <a 
                  href="https://www.linkedin.com/in/alexandre-silvestrin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-amber-400 transition-colors duration-300 font-medium"
                >
                  Alexandre Silvestrin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 