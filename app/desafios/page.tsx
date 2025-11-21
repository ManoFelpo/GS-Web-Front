"use client"

import { useState } from "react"
import { Trophy, Users, Clock, Zap, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Challenge {
  id: string
  title: string
  description: string
  difficulty: "Fácil" | "Médio" | "Difícil"
  duration: string
  participants: number
  category: string
  rewards: number
  progress: number
  completed: boolean
}

export default function DesafiosPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "1",
      title: "Gerencie um Time Remoto Sob Pressão",
      description:
        "Simule decisões críticas de liderança em um cenário de crise. Seu score será baseado em decisões humanas e de negócio.",
      difficulty: "Difícil",
      duration: "2 horas",
      participants: 234,
      category: "Liderança",
      rewards: 500,
      progress: 0,
      completed: false,
    },
    {
      id: "2",
      title: "Design Thinking - Inovação em 4 Passos",
      description: "Resolva um problema real usando a metodologia de Design Thinking. Protótipo e validação inclusos.",
      difficulty: "Médio",
      duration: "90 minutos",
      participants: 156,
      category: "Criatividade",
      rewards: 300,
      progress: 65,
      completed: false,
    },
    {
      id: "3",
      title: "Comunicação Efetiva - Pitch Challenge",
      description: "Prepare e apresente um pitch de 3 minutos. A IA avaliará clareza, impacto e estrutura.",
      difficulty: "Médio",
      duration: "1 hora",
      participants: 89,
      category: "Comunicação",
      rewards: 250,
      progress: 100,
      completed: true,
    },
    {
      id: "4",
      title: "Análise de Dados - Extraia Insights",
      description: "Analise um dataset complexo e identifique 5 insights acionáveis para negócio.",
      difficulty: "Difícil",
      duration: "3 horas",
      participants: 67,
      category: "Técnico",
      rewards: 400,
      progress: 0,
      completed: false,
    },
  ])

  const stats = [
    { label: "Desafios Completos", value: "3", color: "from-primary to-secondary" },
    { label: "Pontos Conquistados", value: "1,250", color: "from-secondary to-accent" },
    { label: "Ranking", value: "#47", color: "from-accent to-primary" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Desafios Imersivos</h1>
          <p className="text-foreground/60 mb-6">
            Participe de simulações e ganhe recompensas enquanto desenvolve habilidades reais
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-4 border border-border">
                <p className="text-foreground/60 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </header>

      {/* Challenges */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {challenges.map((challenge) => (
          <Card
            key={challenge.id}
            className={`p-6 border hover:border-primary/50 transition-all ${
              challenge.completed ? "border-accent/30 bg-accent/5" : "border-border"
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {/* Left - Challenge info */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      challenge.difficulty === "Fácil"
                        ? "bg-green-500/20"
                        : challenge.difficulty === "Médio"
                          ? "bg-yellow-500/20"
                          : "bg-destructive/20"
                    }`}
                  >
                    <Zap className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      {challenge.title}
                      {challenge.completed && <CheckCircle2 className="w-5 h-5 text-accent" />}
                    </h3>
                    <p className="text-foreground/60 text-sm mt-1">{challenge.description}</p>
                  </div>
                </div>

                {/* Difficulty and category */}
                <div className="flex flex-wrap gap-3 text-sm">
                  <span
                    className={`px-3 py-1 rounded-lg font-medium ${
                      challenge.difficulty === "Fácil"
                        ? "bg-green-500/20 text-green-700"
                        : challenge.difficulty === "Médio"
                          ? "bg-yellow-500/20 text-yellow-700"
                          : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {challenge.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary font-medium">
                    {challenge.category}
                  </span>
                </div>

                {/* Participants and duration */}
                <div className="flex gap-6 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants} participantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{challenge.duration}</span>
                  </div>
                </div>
              </div>

              {/* Right - Progress and rewards */}
              <div className="bg-muted rounded-lg p-4 space-y-4">
                {challenge.progress > 0 && (
                  <>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Progresso</span>
                        <span className="text-sm font-bold text-foreground">{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} />
                    </div>
                  </>
                )}

                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="font-bold text-foreground">{challenge.rewards} pontos</span>
                </div>

                <Button
                  className={`w-full ${
                    challenge.completed
                      ? "bg-accent hover:bg-accent/90"
                      : challenge.progress > 0
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-primary hover:bg-primary/90"
                  } text-primary-foreground`}
                >
                  {challenge.completed ? "Certificado" : challenge.progress > 0 ? "Continuar" : "Começar"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}
