"use client"

import { Zap, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  level: number
  badges: number
  streak: number
  company: string
}

export default function LeaderboardPage() {
  const leaders: LeaderboardEntry[] = [
    { rank: 1, name: "Maria Silva", points: 5420, level: 12, badges: 8, streak: 28, company: "TechCorp" },
    { rank: 2, name: "João Santos", points: 4890, level: 11, badges: 7, streak: 21, company: "DataFlow" },
    { rank: 3, name: "Ana Costa", points: 4650, level: 11, badges: 6, streak: 18, company: "InnovateTech" },
    { rank: 4, name: "Carlos Oliveira", points: 4320, level: 10, badges: 5, streak: 15, company: "TechCorp" },
    { rank: 5, name: "Lucia Martins", points: 3890, level: 9, badges: 4, streak: 12, company: "EcoGreen" },
  ]

  const getMedalIcon = (rank: number) => {
    if (rank === 1) return "🥇"
    if (rank === 2) return "🥈"
    if (rank === 3) return "🥉"
    return "🎯"
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Ranking Global</h1>
          <p className="text-foreground/60">Os profissionais mais dedicados da WorkSphere</p>
        </div>

        <Card className="border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
            <div className="grid grid-cols-8 gap-4 font-bold">
              <div className="col-span-1">#</div>
              <div className="col-span-2">Profissional</div>
              <div className="col-span-1 text-center">Nível</div>
              <div className="col-span-1 text-center">Pontos</div>
              <div className="col-span-1 text-center">Medalhas</div>
              <div className="col-span-1 text-center">Sequência</div>
              <div className="col-span-1">Empresa</div>
            </div>
          </div>

          {/* Entries */}
          <div className="divide-y divide-border">
            {leaders.map((entry, idx) => (
              <div
                key={entry.rank}
                className={`p-6 hover:bg-muted/50 transition-colors ${entry.rank <= 3 ? "bg-muted/30" : ""}`}
              >
                <div className="grid grid-cols-8 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1 text-2xl font-bold">{getMedalIcon(entry.rank)}</div>

                  {/* Name */}
                  <div className="col-span-2">
                    <p className="font-bold text-foreground">{entry.name}</p>
                  </div>

                  {/* Level */}
                  <div className="col-span-1 text-center">
                    <Badge className="bg-primary/20 text-primary">{entry.level}</Badge>
                  </div>

                  {/* Points */}
                  <div className="col-span-1 text-center">
                    <span className="font-bold text-primary">{entry.points.toLocaleString()}</span>
                  </div>

                  {/* Badges */}
                  <div className="col-span-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Trophy className="w-4 h-4 text-accent" />
                      <span className="font-bold text-foreground">{entry.badges}</span>
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="col-span-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="font-bold text-foreground">{entry.streak}</span>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="col-span-1 text-sm text-foreground/60">{entry.company}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Your position */}
        <Card className="mt-6 p-6 border border-accent bg-accent/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-foreground/60 text-sm mb-1">Sua Posição</p>
              <p className="text-3xl font-bold text-foreground">#47 • 2,450 Pontos</p>
            </div>
            <div className="text-right">
              <p className="text-foreground/60 text-sm mb-1">Para próximo ranking</p>
              <p className="text-2xl font-bold text-primary">+320 pontos</p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
