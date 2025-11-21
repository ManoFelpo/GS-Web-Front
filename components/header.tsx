"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-xl border-b border-cyan-500/20"
          : "bg-gradient-to-b from-slate-900/60 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all"></div>
            <div className="absolute inset-1 rounded-full border border-cyan-300/30 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-cyan-400 group-hover:bg-magenta-400 transition-colors"></div>
          </div>
          <span className="font-bold text-lg tracking-wide text-white">WORKSPHERE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm">
            Features
          </Link>
          <Link href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm">
            About
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm">
            Pricing
          </Link>
        </nav>

        <Button
          className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 font-semibold transition-all"
          asChild
        >
          <Link href="/signup">Get started</Link>
        </Button>
      </div>
    </header>
  )
}
