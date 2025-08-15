import React from 'react'
import Image from 'next/image'

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Número do WhatsApp da Auto Ar Silvestrin
    const phoneNumber = '551123352141'
    const message = 'Olá! Gostaria de saber mais sobre os serviços da Auto Ar Silvestrin.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Abre em nova guia
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={handleWhatsAppClick}
      title="Fale conosco no WhatsApp"
    >
      <Image 
        src="/icons/whatsapp.png" 
        alt="WhatsApp" 
        width={48} 
        height={48}
        className="w-12 h-12 drop-shadow-lg"
      />
    </div>
  )
}

export default WhatsAppFloat 