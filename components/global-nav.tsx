"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/comunidade", label: "Comunidade" }, // Added Comunidade link
    { href: "/marketplace", label: "Marketplace" },
    { href: "/desafios", label: "Desafios" },
    { href: "/trilhas/all", label: "Trilhas" },
    { href: "/sustentabilidade", label: "Impacto" },
    { href: "/gamification/leaderboard", label: "Leaderboard" },
  ]

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            </div>
            <span className="font-bold text-sm tracking-wide text-white hidden sm:inline">WORKSPHERE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href) ? "bg-cyan-400/10 text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hidden sm:flex bg-transparent"
              asChild
            >
              <Link href="/auth/login">Entrar</Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-400/50 hidden sm:flex"
              asChild
            >
              <Link href="/auth/signup">Cadastro</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href) ? "bg-cyan-400/10 text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2 border-t border-slate-700">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
                asChild
              >
                <Link href="/auth/login">Entrar</Link>
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white" asChild>
                <Link href="/auth/signup">Cadastro</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
