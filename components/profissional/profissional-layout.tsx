"use client"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Brain, Home, Zap, BookOpen, Trophy, Briefcase, LogOut, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSupabaseClient } from "@/lib/supabase/client"
import { useState } from "react"

interface Props {
  activeTab: string
  setActiveTab: (tab: string) => void
  children: React.ReactNode
}

export default function ProfissionalLayout({ activeTab, setActiveTab, children }: Props) {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "profile", label: "Perfil", icon: User },
    { id: "mentor", label: "Mentor IA", icon: Brain },
    { id: "skills", label: "Habilidades", icon: Zap },
    { id: "trilhas", label: "Trilhas", icon: BookOpen },
    { id: "portfolio", label: "Portfólio", icon: Briefcase },
    { id: "achievements", label: "Conquistas", icon: Trophy },
  ]

  const handleLogout = async () => {
    try {
      const supabase = getSupabaseClient()
      await supabase.auth.signOut()
      window.location.href = "/"
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <aside
        className={`w-64 glass border-r border-primary/20 bg-gradient-to-b from-slate-900 to-purple-950 flex flex-col fixed left-0 top-0 h-screen transition-transform md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-primary/20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all"></div>
              <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
            </div>
            <span className="font-bold text-lg text-white">WORKSPHERE</span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/30"
                    : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-primary/20 space-y-2">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-white">Ana Silva</p>
            <p className="text-xs text-slate-400">ana.silva@email.com</p>
          </div>
          <Button
            onClick={handleLogout}
            className="w-full justify-start bg-accent/10 border border-accent/20 hover:bg-accent/20 text-accent font-medium"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64 overflow-auto">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg text-cyan-400"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {children}
      </main>
    </div>
  )
}
