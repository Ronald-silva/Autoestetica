'use client'

import React, { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const faqs: FAQItemProps[] = [
  {
    question: 'Como funciona o atendimento?',
    answer: 'Nossos profissionais vão até você com todo o equipamento necessário. Basta ter um espaço adequado para o veículo e nós cuidamos do resto. O serviço é realizado com a mesma qualidade de uma loja física, mas com a comodidade de ser em sua casa ou trabalho.'
  },
  {
    question: 'Qual espaço necessário?',
    answer: 'Para realizar o serviço, precisamos de um espaço coberto (garagem ou estacionamento) com aproximadamente 5x3 metros, que permita livre acesso ao redor do veículo. O local deve ser plano e bem iluminado.'
  },
  {
    question: 'Preciso de ponto de água/luz?',
    answer: 'Sim, precisamos de acesso a uma tomada elétrica comum e um ponto de água. Nossa equipe leva todas as extensões e mangueiras necessárias, precisando apenas desses pontos de acesso básicos.'
  },
  {
    question: 'Quanto tempo leva o serviço?',
    answer: 'O tempo varia de acordo com o serviço escolhido. A vitrificação de faróis leva em média 2 horas, enquanto a vitrificação de pintura pode levar de 6 a 8 horas. Informamos o tempo exato no momento do agendamento.'
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Oferecemos garantia de 1 ano em todos os nossos serviços, cobrindo qualquer defeito de aplicação. A garantia é válida mediante apresentação do certificado que entregamos após a conclusão do serviço.'
  }
]

const FAQItem: React.FC<FAQItemProps & { isOpen: boolean; onClick: () => void }> = ({
  question,
  answer,
  isOpen,
  onClick
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold pr-8">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso atendimento móvel e conheça melhor nosso trabalho
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Fale conosco no WhatsApp
          </p>
          <a
            href="https://wa.me/5585996092045"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <span className="font-semibold">Enviar mensagem</span>
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 