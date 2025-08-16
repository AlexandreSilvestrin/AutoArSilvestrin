import React from 'react'
import Image from 'next/image'
import { Award, Shield, Car } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Sobre = () => {
  const features = [
    {
      icon: Award,
      title: "30+ Anos de Experiência",
      description: "Tradição e qualidade no mercado automotivo"
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Todos os serviços com garantia estendida"
    },
    {
      icon: Car,
      title: "Especialização",
      description: "Foco em ar-condicionado, autoelétrica e radiadores"
    }
  ]

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos')
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="sobre" className="section-padding bg-light pt-28 sm:pt-32 md:pt-36 lg:pt-40">
      <div className="section-container">
        {/* Hero Section */}
        <ScrollReveal y={100} duration={0.8}>
          <div className="text-center mt-20 md:mt-0">
            <h1 className="section-title text-hero mb-6">
              Auto Ar Silvestrin
            </h1>
            <p className="section-subtitle text-xl">
              Especialistas em ar-condicionado, autoelétrica e radiadores com mais de 30 anos de experiência no mercado
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <ScrollReveal x={-50} delay={0.2} duration={0.8}>
            <div className="space-y-6">
              <h2 className="text-title font-display font-bold text-primary mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fundada há mais de três décadas, a Auto Ar Silvestrin se estabeleceu como referência 
                  em qualidade e confiança no setor automotivo. Nossa missão é proporcionar serviços 
                  excepcionais que mantêm seu veículo funcionando perfeitamente.
                </p>
                <p>
                  Especializamo-nos em sistemas de ar-condicionado, autoelétrica e radiadores, 
                  oferecendo soluções completas para todas as marcas e modelos de veículos.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <button 
                  onClick={scrollToServices}
                  className="btn-primary"
                >
                  Conheça Nossos Serviços
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Image - Oculto no mobile */}
          <ScrollReveal x={50} delay={0.4} duration={0.8}>
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <Image
                  src="/images/ar_condicionado.jpg"
                  alt="Oficina Auto Ar Silvestrin"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Features Grid - Ajustado para 3 features em 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index}
              y={50} 
              delay={index * 0.1} 
              duration={0.6}
            >
              <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-base font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section - Ajustado para 3 estatísticas */}
        <ScrollReveal y={100} delay={0.6} duration={0.8}>
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">30+</div>
                <div className="text-slate-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-slate-600">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-slate-600">Garantia</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Sobre 