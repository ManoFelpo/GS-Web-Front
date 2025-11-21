"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Lock } from "lucide-react"

export default function LearningPaths() {
  const paths = [
    {
      name: "Liderança de Equipes Remotas",
      description: "Desenvolva habilidades para gerenciar times distribuídas globalmente",
      progress: 65,
      modules: 8,
      completed: 5,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Inovação e Criatividade",
      description: "Explore design thinking e metodologias de inovação",
      progress: 35,
      modules: 6,
      completed: 2,
      color: "from-blue-500 to-magenta-500",
    },
    {
      name: "Sustentabilidade Corporativa",
      description: "Impacto ambiental e social nas decisões empresariais",
      progress: 0,
      modules: 5,
      completed: 0,
      color: "from-magenta-500 to-cyan-400",
    },
  ]

  return (
    <div className="p-8 space-y-8 bg-gradient-to-b from-slate-900 to-purple-950 min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Trilhas de Aprendizado</h1>
        <p className="text-slate-400">Caminhos personalizados para sua evolução profissional</p>
      </div>

      <div className="space-y-6">
        {paths.map((path, idx) => (
          <Card
            key={idx}
            className="p-6 border border-cyan-500/20 bg-slate-800/50 backdrop-blur-xl hover:border-cyan-400/50 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{path.name}</h3>
                <p className="text-slate-400">{path.description}</p>
              </div>
              <div
                className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/50`}
              >
                <span className="text-white font-bold">{path.progress}%</span>
              </div>
            </div>

            <div className="mb-6">
              <Progress value={path.progress} className="h-3 bg-slate-700/50" />
              <p className="text-sm text-slate-400 mt-2">
                {path.completed} de {path.modules} módulos completos
              </p>
            </div>

            {/* Module list */}
            <div className="space-y-3 mb-6">
              {[...Array(path.modules)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i < path.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  ) : i === path.completed ? (
                    <Circle className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Lock className="w-5 h-5 text-slate-600" />
                  )}
                  <span
                    className={
                      i < path.completed
                        ? "text-slate-400 line-through"
                        : i === path.completed
                          ? "text-white font-medium"
                          : "text-slate-600"
                    }
                  >
                    Módulo {i + 1}:{" "}
                    {
                      [
                        "Fundamentos",
                        "Conceitos Avançados",
                        "Prática",
                        "Projeto",
                        "Mentoria",
                        "Desafio",
                        "Avaliação",
                        "Certificação",
                      ][i]
                    }
                  </span>
                </div>
              ))}
            </div>

            <Button
              className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 text-white font-semibold shadow-lg shadow-cyan-400/30`}
            >
              {path.completed === 0 ? "Começar Trilha" : path.progress === 100 ? "Certificado" : "Continuar"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
