"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Simulação de login - aqui você pode adicionar sua lógica real
      // Removida a parte de verificação do Supabase
      
      // Simples validação local
      if (email && password) {
        // Login bem-sucedido - redireciona para a home
        router.push("/")
      } else {
        throw new Error("Preencha todos os campos")
      }
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login")
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

          <h1 className="text-3xl font-bold text-white mb-2 text-center">Bem-vindo de volta</h1>
          <p className="text-slate-400 text-center mb-6">Faça login na sua conta</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
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

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
            >
              {loading ? "Fazendo login..." : "Fazer Login"}
            </Button>
          </form>

          <p className="text-center text-slate-400 mt-6 text-sm">
            Não tem conta?{" "}
            <Link href="/auth/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
