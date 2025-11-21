"use client"

import { Target, TrendingUp, Award, Leaf } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function DashboardOverview() {
  const stats = [
    {
      label: "Nível",
      value: "Especialista II",
      icon: Award,
      color: "from-primary to-secondary",
      glow: "shadow-primary/30",
    },
    {
      label: "Pontos",
      value: "2,450",
      icon: TrendingUp,
      color: "from-secondary to-accent",
      glow: "shadow-secondary/30",
    },
    { label: "Habilidades", value: "12/20", icon: Target, color: "from-accent to-primary", glow: "shadow-accent/30" },
    { label: "Impacto", value: "Alto", icon: Leaf, color: "from-primary to-accent", glow: "shadow-primary/30" },
  ]

  const skills = [
    { name: "Liderança", progress: 85 },
    { name: "Criatividade", progress: 72 },
    { name: "Resolução de Problemas", progress: 90 },
    { name: "Comunicação", progress: 78 },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Bem-vindo de volta, João!
        </h1>
        <p className="text-foreground/60">Você está no nível Especialista. Continue evoluindo!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className={`glass rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl ${stat.glow}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-foreground/60 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-lg ${stat.glow}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Skills section */}
      <div className="glass rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Principais Habilidades</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-foreground/60 text-sm">{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} className="h-2 bg-muted" />
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="glass rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Atividades Recentes</h2>
        <div className="space-y-4">
          {[
            { activity: "Completou desafio: Liderança Ágil", date: "Hoje", icon: "✨" },
            { activity: "Ganhou medalha: Inovador em Criatividade", date: "Ontem", icon: "🏅" },
            { activity: "Avançou para nível 5 em Comunicação", date: "2 dias atrás", icon: "📈" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-foreground font-medium">{item.activity}</p>
                <p className="text-foreground/60 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
