import React from 'react'
import Image from 'next/image'

const Contato = () => {
  const whatsappLink = "https://wa.me/551123352141"
  const phoneNumber = "(11) 2335-2141"

  const horarios = [
    { dia: "Segunda-feira", horario: "08:00 - 17:00" },
    { dia: "Terça-feira", horario: "08:00 - 17:00" },
    { dia: "Quarta-feira", horario: "08:00 - 17:00" },
    { dia: "Quinta-feira", horario: "08:00 - 17:00" },
    { dia: "Sexta-feira", horario: "08:00 - 17:00" },
    { dia: "Sábado", horario: "08:00 - 12:15" },
    { dia: "Domingo", horario: "Fechada" }
  ]

  return (
    <section id="contato" className="py-8 bg-primary text-white section-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-delay-200">
            Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg animate-delay-300">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl mr-4">📞</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                  <p className="text-lg">(11) 2335-2141</p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg animate-delay-400">
              <div className="flex items-center justify-center mb-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200 mr-4"
                >
                  <Image 
                    src="/icons/whatsapp.png" 
                    alt="WhatsApp"
                    width={48}
                    height={48}
                    className="rounded-lg cursor-pointer"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-secondary transition-colors duration-200 underline"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção de Horários */}
          <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg animate-delay-500">
            <h3 className="text-xl font-semibold mb-6">Horário de Funcionamento</h3>
            <div className="max-w-md mx-auto">
              {horarios.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white border-opacity-20 last:border-b-0">
                  <span className="text-left">{item.dia}</span>
                  <span className={`text-right ${item.horario === 'Fechada' ? 'text-red-300' : 'text-green-300'}`}>
                    {item.horario}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg animate-delay-500">
            <h3 className="text-xl font-semibold mb-4">Endereço e Localização</h3>
            <div className="mb-4">
              <a 
                href="https://maps.app.goo.gl/UKcaoea5cXCBzGsg7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-secondary transition-colors duration-200 underline"
              >
                Av. Maria Estela, 55 - Jardim Maria Estela, São Paulo - SP, 04180-010, Brasil
              </a>
              <p className="text-sm text-gray-300 mt-2">São Paulo - SP</p>
              <p className="text-xs text-gray-400 mt-1">📍 Clique no endereço para abrir no Google Maps</p>
            </div>
            
            {/* Mapa do Google Maps */}
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.7711503467922!2d-46.5964584303842!3d-23.63714107008141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b5901cf7747%3A0x63af4ca0c05283b5!2sAR%20CONDICIONADO%20AUTOMOTIVO!5e0!3m2!1spt-BR!2sbr!4v1754430831394!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato 