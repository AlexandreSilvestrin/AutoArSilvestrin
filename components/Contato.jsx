import React from 'react'
import Image from 'next/image'
import { Phone, Clock, MapPin, Star } from 'lucide-react'

const Contato = () => {
  const whatsappLink = "https://wa.me/551123352141"
  const phoneNumber = "(11) 2335-2141"

  const horarios = [
    { dia: "Segunda-feira", horario: "08:00 - 17:00", status: "open" },
    { dia: "Terça-feira", horario: "08:00 - 17:00", status: "open" },
    { dia: "Quarta-feira", horario: "08:00 - 17:00", status: "open" },
    { dia: "Quinta-feira", horario: "08:00 - 17:00", status: "open" },
    { dia: "Sexta-feira", horario: "08:00 - 17:00", status: "open" },
    { dia: "Sábado", horario: "08:00 - 12:15", status: "open" },
    { dia: "Domingo", horario: "Fechada", status: "closed" }
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone e WhatsApp",
      value: phoneNumber,
      whatsappText: "Envie uma mensagem",
      phoneAction: `tel:${phoneNumber}`,
      whatsappAction: whatsappLink,
      color: "bg-green-600"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Av. Maria Estela, 55 - Jardim Maria Estela, São Paulo - SP",
      action: "https://maps.app.goo.gl/UKcaoea5cXCBzGsg7",
      color: "bg-red-600"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-primary text-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-title" style={{ color: 'white' }}>
            Entre em Contato
          </h2>
          <p className="section-subtitle" style={{ color: 'white' }}>
            Estamos aqui para ajudar com todas as suas necessidades automotivas
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index === 0 ? (
                // Card combinado de WhatsApp e Telefone
                <>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src="/icons/whatsapp.png" 
                      alt="WhatsApp" 
                      width={48} 
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-white">{info.title}</h3>
                  
                  {/* WhatsApp */}
                  <div className="mb-4">
                    <a 
                      href={info.whatsappAction}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-green-400 transition-colors duration-300 block text-lg font-medium"
                    >
                      {info.whatsappText}
                    </a>
                  </div>
                  
                  {/* Telefone */}
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a 
                      href={info.phoneAction}
                      className="text-slate-200 hover:text-secondary transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </>
              ) : (
                // Card de endereço normal
                <>
                  <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                  <a 
                    href={info.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-secondary transition-colors duration-300 block"
                  >
                    {info.value}
                  </a>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Business Hours - Centralizado */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Horário de Funcionamento</h3>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            {horarios.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-slate-600/30 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-white">{item.dia}</span>
                </div>
                <span className={`font-medium ${
                  item.status === 'closed' ? 'text-red-400' : 'text-green-400'
                }`}>
                  {item.horario}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Nossa Localização</h3>
            <p className="text-slate-300 mb-6">
              Venha nos visitar ou use o mapa para encontrar o caminho
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.7711503467922!2d-46.5964584303842!3d-23.63714107008141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b5901cf7747%3A0x63af4ca0c05283b5!2sAR%20CONDICIONADO%20AUTOMOTIVO!5e0!3m2!1spt-BR!2sbr!4v1754430831394!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-6 h-6 text-secondary" />
              <span className="text-slate-300">30+ anos de experiência</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-6 h-6 text-secondary" />
              <span className="text-slate-300">1000+ clientes satisfeitos</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-6 h-6 text-secondary" />
              <span className="text-slate-300">Garantia em todos os serviços</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato 