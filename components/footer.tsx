"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950 border-t border-cyan-500/20 pt-20 pb-10 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all"></div>
                <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
              </div>
              <span className="font-bold text-lg text-white">WORKSPHERE</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Empowering individuals and businesses through intelligent technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Para Profissionais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Para Empresas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Acessibilidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {currentYear} WorkSphere. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
