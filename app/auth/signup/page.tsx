"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getSupabaseClient } from "@/lib/supabase/client"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [userType, setUserType] = useState<"professional" | "business">("professional")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const supabase = getSupabaseClient()

      const redirectTo = process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
        : `${window.location.origin}/auth/callback`

      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectTo,
          data: {
            full_name: fullName,
            user_type: userType,
          },
        },
      })

      if (signupError) throw signupError

      if (data.user) {
        router.push(userType === "professional" ? "/profissional" : "/empresa")
      }
    } catch (err: any) {
      setError(err.message || "Erro ao cadastrar")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
          <Link href="/" className="flex items-center gap-2 mb-8 group justify-center">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            </div>
            <span className="font-bold text-lg text-white">WORKSPHERE</span>
          </Link>

          <h1 className="text-3xl font-bold text-white mb-2 text-center">Criar Conta</h1>
          <p className="text-slate-400 text-center mb-6">Comece sua jornada de transformação</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="text-sm text-slate-300 mb-2 block">Nome Completo</label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Seu nome"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">Senha</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-2 block">Tipo de Conta</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="professional"
                    checked={userType === "professional"}
                    onChange={(e) => setUserType(e.target.value as "professional" | "business")}
                    className="w-4 h-4"
                  />
                  <span className="text-white">Profissional</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="business"
                    checked={userType === "business"}
                    onChange={(e) => setUserType(e.target.value as "professional" | "business")}
                    className="w-4 h-4"
                  />
                  <span className="text-white">Empresa</span>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
            >
              {loading ? "Criando conta..." : "Criar Conta"}
            </Button>
          </form>

          <p className="text-center text-slate-400 mt-6 text-sm">
            Já tem conta?{" "}
            <Link href="/auth/login" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
