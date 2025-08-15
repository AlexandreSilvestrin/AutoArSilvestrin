import React from 'react'

export default function Marcas() {
  const marcas = [
    { nome: 'Selenia', logo: '/logos/selenia.png' },
    { nome: 'Osram', logo: '/logos/osram.png' },
    { nome: 'Philips', logo: '/logos/philips.png' },
    { nome: 'Valeo', logo: '/logos/valeo.png' },
    { nome: 'Paraflu', logo: '/logos/paraflu.png' },
    { nome: 'ACDelco', logo: '/logos/acdelco.png' }
  ]

  return (
    <section className="py-8 section-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 animate-delay-200">
            Trabalhamos com as melhores marcas do mercado
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {marcas.map((marca, index) => (
                         <div 
                           key={index}
                           className="animate-delay-300"
                           style={{ animationDelay: `${index * 100}ms` }}
                         >
                             <img
                 src={marca.logo}
                 alt={`Logo ${marca.nome}`}
                 className="h-16 w-24 object-contain transition-transform duration-300 hover:scale-110"
                 title={marca.nome}
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
