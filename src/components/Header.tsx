'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-black/95 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative w-[120px] h-[40px]">
            <Link href="/" className="block relative w-full h-full">
              <Image
                src="/logo.png"
                alt="Elite Gloss"
                fill
                sizes="(max-width: 120px) 100vw, 120px"
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicos" className="hover:text-red-600 transition">
              Serviços
            </Link>
            <Link href="#beneficios" className="hover:text-red-600 transition">
              Benefícios
            </Link>
            <Link href="#faq" className="hover:text-red-600 transition">
              FAQ
            </Link>
            <div className="relative">
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                Atendemos em domicílio
              </span>
            </div>
            <Link 
              href="#agendar" 
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Agende seu horário
            </Link>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#servicos" 
                className="hover:text-red-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="#beneficios" 
                className="hover:text-red-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </Link>
              <Link 
                href="#faq" 
                className="hover:text-red-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="relative inline-block">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  Atendemos em domicílio
                </span>
              </div>
              <Link 
                href="#agendar" 
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Agende seu horário
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 