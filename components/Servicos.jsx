import React from 'react'
import Image from 'next/image'

const Servicos = () => {

  const services = [
    {
      image: "ar_condicionado.jpg",
      title: "Ar Condicionado",
      description: "Manutenção e reparo completo do sistema de ar condicionado. Inclui recarga de gás, troca de filtros e reparo de vazamentos. Garantimos conforto térmico ideal para seu veículo."
    },
    {
      image: "radiador.jpg",
      title: "Radiador",
      description: "Serviços especializados em sistema de arrefecimento. Reparo de vazamentos, troca de mangueiras, limpeza de radiador e substituição de componentes. Mantemos o motor na temperatura ideal para melhor performance."
    },
    {
      image: "auto_eletrico.jpg",
      title: "Auto Elétrico",
      description: "Diagnóstico e reparo de sistemas elétricos automotivos. Carga, baterias e lâmpadas originais, motor de partida, alternador, ventoinhas internas e ventoinha do radiador."
    },
    {
      image: "troca_de_oleo.jpg",
      title: "Troca de Óleo",
      description: "Troca de óleo e filtros com produtos de qualidade. Utilizamos óleos certificados para garantir a proteção e durabilidade do motor."
    },
    {
      image: "polimento_farol.png",
      title: "Polimento de Farol",
      description: "Polimento e restauração de faróis amarelados ou riscados. Recuperamos a transparência original e melhoramos a iluminação noturna. Serviço que garante maior segurança e melhor aparência do veículo."
    },
    {
      image: "bateria.jpg",
      title: "Baterias",
      description: "Trabalhamos com as marcas Acdelco e Luxor com garantia de 18 e 24 meses. Baterias de alta qualidade para garantir o melhor desempenho do seu veículo. Instalação e teste gratuitos."
    }
  ]

  const getGridClass = () => {
    const serviceCount = services.length;
    if (serviceCount === 5) {
      return "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto";
    } else if (serviceCount === 6) {
      return "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto";
    } else if (serviceCount >= 7) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto";
    }
  };

  const getCardClass = (index) => {
    const serviceCount = services.length;
    let baseClass = "service-card hover:scale-110 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-700 ease-in-out";
    
    if (serviceCount === 5 && (index === 3 || index === 4)) {
      // For 5 services: center the last 2 cards on desktop only
      return `${baseClass} md:col-start-2`;
    }
    
    return baseClass;
  };

  return (
    <section id="servicos" className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Nossos Serviços
          </h2>
          <div className={getGridClass()}>
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card hover:scale-110 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-700 ease-in-out"
                style={{
                  backgroundColor: 'rgb(236, 196, 64)',
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  {service.title === "Baterias" ? (
                    <Image 
                      src="/images/bateria.jpg"
                      alt="Bateria Acdelco"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image 
                      src={`/images/${service.image}`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3 text-center">{service.title}</h3>
                  <p className="text-black text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos 