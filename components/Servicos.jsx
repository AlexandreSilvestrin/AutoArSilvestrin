import React from 'react'
import Image from 'next/image'
import { Snowflake, Zap, Wrench, Droplets, Lightbulb, Battery } from 'lucide-react'

const Servicos = () => {
  const services = [
    {
      icon: Snowflake,
      image: "ar_condicionado.jpg",
      title: "Ar Condicionado",
      description: "Manutenção e reparo completo do sistema de ar condicionado. Inclui recarga de gás, troca de filtros e reparo de vazamentos.",
      features: ["Recarga de gás", "Troca de filtros", "Reparo de vazamentos", "Limpeza do sistema"],
      message: "Olá! Gostaria de saber mais sobre os serviços de Ar Condicionado da Auto Ar Silvestrin."
    },
    {
      icon: Droplets,
      image: "radiador.jpg",
      title: "Radiador",
      description: "Serviços especializados em sistema de arrefecimento. Reparo de vazamentos, troca de mangueiras e limpeza de radiador.",
      features: ["Reparo de vazamentos", "Troca de mangueiras", "Limpeza de radiador", "Substituição de componentes"],
      message: "Olá! Gostaria de saber mais sobre os serviços de Radiador da Auto Ar Silvestrin."
    },
    {
      icon: Zap,
      image: "auto_eletrico.jpg",
      title: "Auto Elétrico",
      description: "Diagnóstico e reparo de sistemas elétricos automotivos. Carga, baterias e lâmpadas originais, motor de partida, alternador, ventoinhas internas e ventoinha do radiador.",
      features: ["Carga de baterias", "Lâmpadas originais", "Motor de partida"],
      message: "Olá! Gostaria de saber mais sobre os serviços de Auto Elétrico da Auto Ar Silvestrin."
    },
    {
      icon: Wrench,
      image: "troca_de_oleo.jpg",
      title: "Troca de Óleo",
      description: "Troca de óleo e filtros com produtos de qualidade. Utilizamos óleos certificados para garantir a proteção.",
      features: ["Óleos certificados", "Filtros de qualidade", "Verificação de nível", "Relatório técnico"],
      message: "Olá! Gostaria de saber mais sobre os serviços de Troca de Óleo da Auto Ar Silvestrin."
    },
    {
      icon: Lightbulb,
      image: "polimento_farol.png",
      title: "Polimento de Farol",
      description: "Polimento e restauração de faróis amarelados ou riscados. Recuperamos a transparência original.",
      features: ["Restauração de transparência", "Polimento profissional", "Melhoria da iluminação", "Proteção UV"],
      message: "Olá! Gostaria de saber mais sobre os serviços de Polimento de Farol da Auto Ar Silvestrin."
    },
    {
      icon: Battery,
      image: "bateria.jpg",
      title: "Baterias",
      description: "Trabalhamos com as marcas Acdelco e Luxor com garantia de 18 e 24 meses. Instalação e teste gratuitos.",
      features: ["Marcas Acdelco e Luxor", "Garantia estendida", "Instalação gratuita", "Teste de funcionamento"],
      message: "Olá! Gostaria de saber mais sobre os serviços de Baterias da Auto Ar Silvestrin."
    }
  ]

  const handleWhatsAppClick = (serviceTitle, message) => {
    const phoneNumber = '551123352141'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">
            Nossos Serviços
          </h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para manter seu veículo funcionando perfeitamente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group flex flex-col h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={`/images/${service.image}`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Sempre no final */}
                <div className="mt-auto">
                  <button 
                    onClick={() => handleWhatsAppClick(service.title, service.message)}
                    className="w-full py-3 px-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Image 
                      src="/icons/whatsapp.png" 
                      alt="WhatsApp" 
                      width={20} 
                      height={20}
                      className="w-5 h-5"
                    />
                    <span>Entrar em Contato</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos 