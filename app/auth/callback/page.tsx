"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { getSupabaseClient } from "@/lib/supabase/client"

export default function CallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const supabase = getSupabaseClient()

        console.log("[v0] Processando callback de autenticação...")

        const { data, error: sessionError } = await supabase.auth.getSession()

        if (sessionError) {
          console.error("[v0] Erro ao obter sessão:", sessionError)
          throw sessionError
        }

        console.log("[v0] Sessão obtida, usuário:", data?.session?.user?.email)

        if (data?.session?.user) {
          const { data: profile, error: profileError } = await supabase
            .from("user_profiles")
            .select("user_type")
            .eq("id", data.session.user.id)
            .single()

          if (profileError) {
            console.error("[v0] Erro ao buscar perfil:", profileError)
            throw profileError
          }

          console.log("[v0] Perfil encontrado, tipo:", profile?.user_type)

          const redirectPath = profile?.user_type === "business" ? "/empresa" : "/profissional"
          console.log("[v0] Redirecionando para:", redirectPath)

          router.push(redirectPath)
        } else {
          console.log("[v0] Nenhuma sessão encontrada, redirecionando para login")
          router.push("/auth/login")
        }
      } catch (err: any) {
        console.error("[v0] Erro no callback:", err)
        setError(err.message || "Erro ao processar confirmação")
        setLoading(false)
      }
    }

    handleCallback()
  }, [router])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        {loading && (
          <>
            <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-300 text-lg">Verificando seu email...</p>
          </>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-8 py-4 rounded-lg">
            <p className="font-semibold mb-2">Erro na verificação</p>
            <p className="text-sm mb-4">{error}</p>
            <a
              href="/auth/login"
              className="inline-block bg-cyan-400 text-slate-900 px-6 py-2 rounded font-semibold hover:bg-cyan-300 transition"
            >
              Voltar ao login
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
