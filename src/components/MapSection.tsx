'use client'

import React from 'react'

const coverageAreas = [
  {
    city: 'Fortaleza'
  },
  {
    city: 'Eusébio'
  },
  {
    city: 'Aquiraz'
  },
  {
    city: 'Maracanaú'
  }
]

export default function MapSection(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold mb-2 block">
              Área de Cobertura
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Atendemos em toda região metropolitana
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Levamos nosso serviço premium até você com toda comodidade e segurança
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Mapa */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254784.89799856705!2d-38.654191744800096!3d-3.7916661615815814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37ca!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1703440444316!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Regiões */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">
                Regiões Atendidas
              </h3>
              <div className="space-y-4">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-red-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h4 className="font-semibold">{area.city}</h4>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-100">
                <p className="text-sm text-gray-700 mb-3">
                  Não encontrou sua região? Entre em contato para verificarmos a disponibilidade.
                </p>
                <a
                  href="https://wa.me/5585996092045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span className="font-medium">Consultar disponibilidade</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 