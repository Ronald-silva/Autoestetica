import React from 'react'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import BenefitsSection from '@/components/BenefitsSection'
import FAQSection from '@/components/FAQSection'
import BookingSection from '@/components/BookingSection'
import MapSection from '@/components/MapSection'

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <FAQSection />
      <BookingSection />
      <MapSection />
      {/* Outros componentes serão adicionados aqui */}
    </>
  )
} 