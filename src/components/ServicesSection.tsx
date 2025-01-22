'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  imageUrl: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <svg 
            className="w-5 h-5 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Atendimento em domicílio</span>
        </div>
        <Link
          href="https://wa.me/5585996092045"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-red-600 text-white text-center py-3 rounded-full hover:bg-red-700 transition"
        >
          Agendar Serviço
        </Link>
      </div>
    </div>
  )
}

const services = [
  {
    title: 'Vitrificação de Farol',
    description: 'Proteção duradoura que restaura a transparência e brilho dos faróis, melhorando a visibilidade noturna.',
    icon: '💡',
    imageUrl: '/vitrificacao-farol.jpg'
  },
  {
    title: 'Vitrificação de Pintura',
    description: 'Proteção cerâmica que proporciona brilho intenso e proteção duradoura para a pintura do seu veículo.',
    icon: '✨',
    imageUrl: '/vitrificacao-pintura.jpg'
  }
]

export default function ServicesSection(): JSX.Element {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços Premium
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos serviços de alta qualidade com atendimento personalizado em domicílio, 
            trazendo mais conforto e praticidade para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 