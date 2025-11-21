"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from "@/lib/supabase/client"
import { Loader2 } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUserAndRedirect = async () => {
      try {
        const supabase = getSupabaseClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (user) {
          const { data: profile } = await supabase.from("user_profiles").select("type").eq("id", user.id).single()

          if (profile?.type === "professional") {
            router.push("/profissional")
          } else if (profile?.type === "business") {
            router.push("/empresa")
          }
        }
      } catch (error) {
        console.error("Error checking user:", error)
      } finally {
        setLoading(false)
      }
    }

    checkUserAndRedirect()
  }, [router])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
        <p className="text-foreground/60">Carregando seu dashboard...</p>
      </div>
    </main>
  )
}
