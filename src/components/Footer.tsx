import React from 'react'
import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Informações da Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-4">Elite Gloss</h3>
            <p className="text-gray-400 mb-2">CNPJ: 52.428.189/0001-11</p>
            <p className="text-gray-400">Estética Automotiva Premium</p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white transition">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-gray-400 hover:text-white transition">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/5585996092045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 animate-pulse text-green-500 group-hover:animate-none"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>(85) 9.9609-2045</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/eliteglossestetica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@eliteglossestetica</span>
                </a>
              </li>
              <li className="text-gray-400">
                Fortaleza - CE
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Área de Cobertura */}
          <div>
            <h3 className="font-bold text-lg mb-4">Área de Cobertura</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Fortaleza</li>
              <li>Eusébio</li>
              <li>Aquiraz</li>
              <li>Maracanaú</li>
            </ul>
          </div>

          {/* Coluna 5 - Formas de Pagamento */}
          <div>
            <h3 className="font-bold text-lg mb-4">Formas de Pagamento</h3>
            <div className="flex gap-4 items-center">
              <img 
                src="/payment-icons/visa.svg" 
                alt="Visa" 
                className="h-8 w-auto object-contain border border-gray-600 rounded-md p-1 bg-white" 
              />
              <img 
                src="/payment-icons/mastercard.svg" 
                alt="Mastercard" 
                className="h-8 w-auto object-contain border border-gray-600 rounded-md p-1 bg-white" 
              />
              <img 
                src="/payment-icons/pix.svg" 
                alt="PIX" 
                className="h-8 w-auto object-contain border border-gray-600 rounded-md p-1 bg-white" 
              />
              <img 
                src="/payment-icons/money.svg" 
                alt="Dinheiro" 
                className="h-8 w-auto object-contain border border-gray-600 rounded-md p-1 bg-white" 
              />
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Elite Gloss. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 