import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostra o botão após 3 segundos
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    console.log('WhatsApp clicked!') // Debug log
    try {
      const whatsappLink = "https://wa.me/551123352141"
      console.log('Opening:', whatsappLink) // Debug log
      window.open(whatsappLink, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error opening WhatsApp:', error) // Debug log
    }
  }

  const handlePhoneClick = () => {
    console.log('Phone clicked!') // Debug log
    try {
      window.open('tel:1123352141', '_self')
    } catch (error) {
      console.error('Error opening phone:', error) // Debug log
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          {/* Phone Button */}
          <button
            onClick={handlePhoneClick}
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group"
            title="Ligar agora"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </button>
          
          {/* Close Button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
            title="Fechar menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 cursor-pointer"
        title="Fale conosco no WhatsApp"
        type="button"
      >
        <Image 
          src="/icons/whatsapp.png" 
          alt="WhatsApp" 
          width={40} 
          height={40}
          className="w-10 h-10 pointer-events-none"
        />
      </button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
    </div>
  )
}

export default WhatsAppFloat 