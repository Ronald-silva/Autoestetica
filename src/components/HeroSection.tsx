'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const benefitIcons = [
  {
    icon: '🏠',
    text: 'Sem deslocamento'
  },
  {
    icon: '⏰',
    text: 'Horário flexível'
  },
  {
    icon: '✅',
    text: 'Garantia de 1 ano'
  },
  {
    icon: '⭐',
    text: 'Produtos premium'
  }
]

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Atendimento Elite Gloss"
          fill
          sizes="100vw"
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Estética automotiva premium no conforto da sua casa
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Economize tempo e garanta o melhor cuidado para seu carro
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {benefitIcons.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <span className="text-sm md:text-base">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#agendar"
              className="bg-red-600 text-white px-8 py-4 rounded-full text-center text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Agendar Agora
            </Link>
            <Link
              href="https://wa.me/5585996092045"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-center text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
} 