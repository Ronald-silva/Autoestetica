'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  whatsapp: string
  address: string
  carModel: string
  service: string
  preferredDate: string
  preferredTime: string
}

const initialFormData: FormData = {
  name: '',
  whatsapp: '',
  address: '',
  carModel: '',
  service: '',
  preferredDate: '',
  preferredTime: ''
}

const services = [
  { value: 'vitrificacao-farol', label: 'Vitrificação de Farol' },
  { value: 'vitrificacao-pintura', label: 'Vitrificação de Pintura' }
]

export default function BookingSection(): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formata a mensagem para o WhatsApp de forma mais organizada
    const message = `
*Novo Agendamento - Auto Estética*

👤 *Cliente:* ${formData.name}
📱 *WhatsApp:* ${formData.whatsapp}
📍 *Endereço:* ${formData.address}
🚗 *Veículo:* ${formData.carModel}

*Serviço Solicitado:*
${services.find(s => s.value === formData.service)?.label || formData.service}

📅 *Data:* ${new Date(formData.preferredDate).toLocaleDateString('pt-BR')}
⏰ *Horário:* ${formData.preferredTime}
`.trim()

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Redireciona para o WhatsApp com a mensagem formatada
    window.open(`https://wa.me/5585996092045?text=${encodedMessage}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="agendar" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agende seu Serviço
            </h2>
            <p className="text-gray-600">
              Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço para atendimento
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                  Modelo do carro
                </label>
                <input
                  type="text"
                  id="carModel"
                  name="carModel"
                  required
                  value={formData.carModel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço desejado
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Data preferencial
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Horário preferencial
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Solicitar Agendamento
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 