"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Prepare for the future of work
            </h1>

            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              Empowering individuals and businesses through intelligent technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all transform hover:scale-105 rounded-lg"
                asChild
              >
                <Link href="/profissional">I am a professional</Link>
              </Button>
              <Button
                className="px-6 py-3 bg-transparent border-2 border-magenta-500/80 text-white font-semibold hover:bg-magenta-500/10 hover:shadow-lg hover:shadow-magenta-500/50 transition-all rounded-lg"
                asChild
              >
                <Link href="/empresa">I am a business</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Neon orbital element */}
          <div
            className={`relative h-96 md:h-full flex items-center justify-center transform transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-80 h-80">
              {/* Outer orbital ring - cyan */}
              <div
                className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-60 animate-spin"
                style={{ animationDuration: "20s", animationDirection: "reverse" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/80"></div>
              </div>

              {/* Middle orbital ring - blue/magenta */}
              <div
                className="absolute inset-6 border-2 border-magenta-500 rounded-full opacity-50 animate-spin"
                style={{ animationDuration: "30s" }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-magenta-500 shadow-lg shadow-magenta-500/80"></div>
              </div>

              {/* Inner orbital ring - blue */}
              <div
                className="absolute inset-12 border-2 border-blue-400 rounded-full opacity-40 animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/80"></div>
              </div>

              {/* Central glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-magenta-500/30 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
