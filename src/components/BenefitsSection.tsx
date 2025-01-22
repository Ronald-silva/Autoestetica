'use client'

import React from 'react'

interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

const benefits: BenefitCardProps[] = [
  {
    icon: '🚗',
    title: 'Você não perde tempo no trânsito',
    description: 'Economize tempo precioso evitando deslocamentos desnecessários.'
  },
  {
    icon: '⏰',
    title: 'Seu carro não fica indisponível',
    description: 'Aproveite seu tempo em casa enquanto cuidamos do seu veículo.'
  },
  {
    icon: '👀',
    title: 'Acompanhe o serviço de perto',
    description: 'Veja todo o processo e tire suas dúvidas em tempo real.'
  },
  {
    icon: '🏠',
    title: 'Maior comodidade para você',
    description: 'Atendimento personalizado no conforto da sua casa ou trabalho.'
  },
  {
    icon: '🏢',
    title: 'Atendemos em condomínios',
    description: 'Serviço especializado com toda segurança necessária.'
  },
  {
    icon: '📅',
    title: 'Flexibilidade de horários',
    description: 'Agendamento adaptado à sua rotina e disponibilidade.'
  }
]

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function BenefitsSection(): JSX.Element {
  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nosso atendimento em domicílio?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma experiência única de estética automotiva, 
            levando conveniência e qualidade até você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5585996092045"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors"
          >
            <span>Agende uma visita</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 