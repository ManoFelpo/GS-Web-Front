"use client"

import { useState } from "react"
import { Play, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Challenge {
  id: string
  title: string
  description: string
  type: "coding" | "design" | "problem-solving" | "simulation"
  difficulty: "Easy" | "Medium" | "Hard"
  pointsReward: number
  duration: number
  instructions: string
  completed: boolean
}

export default function ChallengesView() {
  const [challenges] = useState<Challenge[]>([
    {
      id: "1",
      title: "Construir um App de Todo",
      description: "Crie uma aplicação funcional de gerenciamento de tarefas com React",
      type: "coding",
      difficulty: "Easy",
      pointsReward: 150,
      duration: 45,
      instructions: `
1. Crie um componente React funcional
2. Implemente adicionar, editar e deletar tarefas
3. Adicione persistência local (localStorage)
4. Escreva pelo menos 3 testes unitários
5. Faça deploy em uma plataforma como Vercel
      `,
      completed: false,
    },
    {
      id: "2",
      title: "Redesenhar um Dashboard",
      description: "Crie um dashboard moderno com UI/UX seguindo especificações",
      type: "design",
      difficulty: "Medium",
      pointsReward: 200,
      duration: 60,
      instructions: `
1. Analise o design fornecido
2. Crie wireframes no Figma
3. Implemente o design em HTML/CSS/React
4. Garanta responsividade em mobile
5. Teste com usuários reais
      `,
      completed: false,
    },
    {
      id: "3",
      title: "Otimizar Desempenho",
      description: "Melhore o desempenho de uma aplicação React em 50%",
      type: "problem-solving",
      difficulty: "Hard",
      pointsReward: 300,
      duration: 90,
      instructions: `
1. Analise o código fornecido
2. Identifique gargalos de performance
3. Aplique técnicas de otimização
4. Use React DevTools e Lighthouse
5. Documente todas as melhorias
      `,
      completed: false,
    },
    {
      id: "4",
      title: "Simular Impacto de IA",
      description: "Use FuturoSim para prever impacto de IA em um setor",
      type: "simulation",
      difficulty: "Medium",
      pointsReward: 250,
      duration: 75,
      instructions: `
1. Escolha um setor específico
2. Configure cenários no FuturoSim
3. Analise dados de saída
4. Crie relatório de insights
5. Apresente recomendações estratégicas
      `,
      completed: false,
    },
  ])

  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [attemptedChallenges, setAttemptedChallenges] = useState<string[]>([])

  const startChallenge = (challengeId: string) => {
    setAttemptedChallenges([...attemptedChallenges, challengeId])
  }

  const difficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "Hard":
        return "text-red-400"
      default:
        return "text-foreground"
    }
  }

  const typeIcon = (type: string) => {
    switch (type) {
      case "coding":
        return "💻"
      case "design":
        return "🎨"
      case "problem-solving":
        return "🧠"
      case "simulation":
        return "🔮"
      default:
        return "🎯"
    }
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Desafios Gamificados
        </h1>
        <p className="text-foreground/60">Participe de desafios práticos e ganhe pontos e medalhas</p>
      </div>

      <div className="grid gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="glass rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{typeIcon(challenge.type)}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{challenge.title}</h3>
                    <p className="text-foreground/60 text-sm">{challenge.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1 text-sm">
                    <Zap className="w-4 h-4 text-secondary" />
                    <span className="text-secondary font-bold">{challenge.pointsReward} pontos</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-foreground/60">{challenge.duration} minutos</span>
                  </div>
                  <div className={`text-sm font-bold ${difficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setSelectedChallenge(challenge)}
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white whitespace-nowrap"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Começar
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  {selectedChallenge && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-foreground">{selectedChallenge.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-foreground mb-2">Instruções:</h4>
                          <pre className="bg-background/50 p-4 rounded text-sm text-foreground/80 whitespace-pre-wrap font-mono">
                            {selectedChallenge.instructions}
                          </pre>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={() => startChallenge(selectedChallenge.id)}
                            className="flex-1 bg-gradient-to-r from-primary to-secondary"
                          >
                            Começar Desafio
                          </Button>
                          {attemptedChallenges.includes(selectedChallenge.id) && (
                            <Button variant="outline" className="flex-1 border-primary/30 text-primary bg-transparent">
                              ✓ Iniciado
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
