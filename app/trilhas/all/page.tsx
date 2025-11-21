"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Zap } from "lucide-react"

export default function AllPathsPage() {
  const paths = [
    {
      name: "Especialista em IA",
      description: "Domine inteligência artificial, machine learning e suas aplicações práticas",
      modules: 12,
      students: 1234,
      duration: "16 semanas",
      difficulty: "Avançado",
      color: "from-primary to-secondary",
    },
    {
      name: "Liderança Transformacional",
      description: "Desenvolva habilidades para liderar em um mundo em transformação digital",
      modules: 8,
      students: 2156,
      duration: "10 semanas",
      difficulty: "Intermediário",
      color: "from-secondary to-accent",
    },
    {
      name: "Inovação e Criatividade",
      description: "Explore metodologias de inovação e desenvolvimento de soluções criativas",
      modules: 6,
      students: 945,
      duration: "8 semanas",
      difficulty: "Intermediário",
      color: "from-accent to-primary",
    },
    {
      name: "Data Science Avançado",
      description: "Análise avançada de dados, visualização e tomada de decisão baseada em dados",
      modules: 10,
      students: 867,
      duration: "14 semanas",
      difficulty: "Avançado",
      color: "from-primary to-accent",
    },
    {
      name: "Sustentabilidade Corporativa",
      description: "ESG, impacto social e práticas sustentáveis em organizações",
      modules: 7,
      students: 654,
      duration: "9 semanas",
      difficulty: "Intermediário",
      color: "from-secondary to-primary",
    },
    {
      name: "Soft Skills para Era Digital",
      description: "Comunicação, empatia, resolução de conflitos e inteligência emocional",
      modules: 5,
      students: 3421,
      duration: "6 semanas",
      difficulty: "Iniciante",
      color: "from-accent to-secondary",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Todas as Trilhas</h1>
          <p className="text-foreground/60">Escolha seu caminho de aprendizado e transformação profissional</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, idx) => (
            <Card
              key={idx}
              className={`p-6 border hover:border-primary/50 transition-all bg-gradient-to-br from-card to-card/50 border-border`}
            >
              <div className="mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${path.color} rounded-lg flex items-center justify-center mb-3`}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{path.name}</h3>
                <p className="text-foreground/60 text-sm">{path.description}</p>
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2 text-foreground/60">
                  <Zap className="w-4 h-4" />
                  <span>{path.modules} módulos</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60">
                  <Clock className="w-4 h-4" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60">
                  <Users className="w-4 h-4" />
                  <span>{path.students.toLocaleString()} inscritos</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    path.difficulty === "Avançado"
                      ? "bg-destructive/20 text-destructive"
                      : path.difficulty === "Intermediário"
                        ? "bg-yellow-500/20 text-yellow-600"
                        : "bg-green-500/20 text-green-600"
                  }`}
                >
                  {path.difficulty}
                </span>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
