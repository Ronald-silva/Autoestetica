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
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span>WhatsApp:</span>
                  <span>(85) 9.9609-2045</span>
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