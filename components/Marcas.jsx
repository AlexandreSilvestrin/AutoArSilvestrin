import React from 'react'
import Image from 'next/image'

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
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header minimalista */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-slate-700 mb-2">
            Marcas Parceiras
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e durabilidade
          </p>
        </div>

        {/* Brands Grid - Apenas logos, sem texto */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {marcas.map((marca, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto relative">
                <Image
                  src={marca.logo}
                  alt={`Logo ${marca.nome}`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
