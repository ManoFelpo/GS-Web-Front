"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import Link from "next/link"

export default function DebugPage() {
  const [status, setStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const supabase = getSupabaseClient()

        const { data: sessionData } = await supabase.auth.getSession()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        const userInfo = sessionData?.session?.user || user || null

        setStatus({
          sessionExists: !!sessionData?.session,
          user: userInfo,
          email: userInfo?.email,
          id: userInfo?.id,
          emailConfirmed: userInfo?.email_confirmed_at !== null,
        })
      } catch (err: any) {
        setStatus({ error: err.message })
      } finally {
        setLoading(false)
      }
    }

    checkStatus()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Debug - Status da Autenticação</h1>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
          {loading ? (
            <p className="text-slate-300">Carregando...</p>
          ) : status?.error ? (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded">
              <p className="font-semibold">Erro:</p>
              <p>{status.error}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Sessão Ativa:</p>
                <p className="text-white font-semibold text-lg">{status?.sessionExists ? "✅ SIM" : "❌ NÃO"}</p>
              </div>

              {status?.user && (
                <>
                  <div>
                    <p className="text-slate-400 text-sm">Email:</p>
                    <p className="text-white font-semibold">{status.email}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">ID do Usuário:</p>
                    <p className="text-white font-mono text-sm break-all">{status.id}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Email Confirmado:</p>
                    <p className="text-white font-semibold">{status.emailConfirmed ? "✅ SIM" : "❌ NÃO"}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-2 bg-cyan-400 text-slate-900 rounded font-semibold hover:bg-cyan-300 transition"
          >
            Voltar Home
          </Link>
          <Link
            href="/auth/login"
            className="px-6 py-2 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 transition"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    </main>
  )
}
