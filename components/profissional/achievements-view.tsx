"use client"

import { useState } from "react"
import { Lock } from "lucide-react"

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  pointsValue: number
  unlocked: boolean
  unlockedDate?: Date
  progress?: number
}

export default function AchievementsView() {
  const [achievements] = useState<Achievement[]>([
    {
      id: "1",
      name: "Primeiro Passo",
      description: "Complete seu primeiro desafio",
      icon: "🚀",
      pointsValue: 50,
      unlocked: true,
      unlockedDate: new Date("2024-01-15"),
    },
    {
      id: "2",
      name: "Mestre em Habilidades",
      description: "Atinja nível 5 em uma habilidade",
      icon: "🏆",
      pointsValue: 100,
      unlocked: true,
      unlockedDate: new Date("2024-02-20"),
    },
    {
      id: "3",
      name: "Herói de Trilhas",
      description: "Complete uma trilha inteira de aprendizado",
      icon: "📚",
      pointsValue: 200,
      unlocked: true,
      unlockedDate: new Date("2024-03-10"),
    },
    {
      id: "4",
      name: "Campeão do Leaderboard",
      description: "Alcance o top 10 do leaderboard global",
      icon: "👑",
      pointsValue: 500,
      unlocked: false,
      progress: 65,
    },
    {
      id: "5",
      name: "Campeão da Sustentabilidade",
      description: "Ganhe 1000 pontos de sustentabilidade",
      icon: "🌱",
      pointsValue: 300,
      unlocked: false,
      progress: 42,
    },
    {
      id: "6",
      name: "Completa as Conquistas",
      description: "Desbloqueie todas as conquistas disponíveis",
      icon: "✨",
      pointsValue: 1000,
      unlocked: false,
      progress: 50,
    },
  ])

  const totalPoints = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.pointsValue, 0)

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Conquistas
        </h1>
        <p className="text-foreground/60">Desbloqueie medalhas e ganhe pontos ao atingir marcos importantes</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {achievements.filter((a) => a.unlocked).length}
          </div>
          <p className="text-foreground/60 text-sm mt-2">Conquistas Desbloqueadas</p>
        </div>

        <div className="glass rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-secondary">{totalPoints}</div>
          <p className="text-foreground/60 text-sm mt-2">Pontos Totais</p>
        </div>

        <div className="glass rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-accent">
            {Math.round((achievements.filter((a) => a.unlocked).length / achievements.length) * 100)}%
          </div>
          <p className="text-foreground/60 text-sm mt-2">Taxa de Conclusão</p>
        </div>

        <div className="glass rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-primary">{achievements.filter((a) => !a.unlocked).length}</div>
          <p className="text-foreground/60 text-sm mt-2">Ainda para desbloquear</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`glass rounded-xl p-6 border transition-all relative overflow-hidden ${
              achievement.unlocked
                ? "border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
                : "border-white/10 opacity-60"
            }`}
          >
            {!achievement.unlocked && (
              <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex items-center justify-center">
                <Lock className="w-8 h-8 text-foreground/40" />
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="text-4xl">{achievement.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{achievement.name}</h3>
                <p className="text-foreground/60 text-sm mt-1">{achievement.description}</p>

                {achievement.unlocked && achievement.unlockedDate && (
                  <p className="text-xs text-primary mt-2">
                    Desbloqueado em {achievement.unlockedDate.toLocaleDateString("pt-BR")}
                  </p>
                )}

                {!achievement.unlocked && achievement.progress !== undefined && (
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-foreground/60">Progresso</span>
                      <span className="text-xs text-primary font-bold">{achievement.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-secondary">+{achievement.pointsValue} pts</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
