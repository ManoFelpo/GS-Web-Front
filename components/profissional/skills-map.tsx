"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsMap() {
  const skills = [
    {
      category: "Liderança",
      items: ["Gestão de Equipes", "Tomada de Decisão", "Visão Estratégica"],
      level: "Avançado",
    },
    { category: "Criatividade", items: ["Inovação", "Design Thinking", "Brainstorming"], level: "Intermediário" },
    { category: "Técnico", items: ["Programação", "Análise de Dados", "DevOps"], level: "Avançado" },
    { category: "Comunicação", items: ["Apresentações", "Negociação", "Oratória"], level: "Intermediário" },
    { category: "Resolução de Problemas", items: ["Pensamento Crítico", "Análise", "Síntese"], level: "Avançado" },
    { category: "Soft Skills", items: ["Empatia", "Colaboração", "Inteligência Emocional"], level: "Intermediário" },
  ]

  return (
    <div className="p-8 space-y-8 bg-gradient-to-b from-slate-900 to-purple-950 min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Mapa de Habilidades</h1>
        <p className="text-slate-400">Visualize suas competências como uma galáxia de planetas interconectados</p>
      </div>

      {/* Galaxy visualization */}
      <Card className="p-12 border border-cyan-500/20 bg-slate-800/50 backdrop-blur-xl min-h-96 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-cyan-400/30 ${
                i === 0 ? "w-60 h-60" : i === 1 ? "w-96 h-96" : "w-full aspect-square"
              }`}
            ></div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-8 w-full">
          {skills.map((skill, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-400/50">
                <span className="text-white font-bold text-center text-sm px-2">{skill.category.split(" ")[0]}</span>
              </div>
              <h3 className="font-bold text-white mb-2">{skill.category}</h3>
              <Badge variant="secondary" className="mb-3 bg-cyan-400/20 text-cyan-300 border-cyan-400/30">
                {skill.level}
              </Badge>
              <div className="text-sm text-slate-400 space-y-1">
                {skill.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Skills breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, idx) => (
          <Card key={idx} className="p-6 border border-cyan-500/20 bg-slate-800/50 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">{skill.category}</h3>
              <Badge variant="outline" className="bg-cyan-400/10 text-cyan-300 border-cyan-400/30">
                {skill.level}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <Badge key={i} variant="secondary" className="bg-magenta-500/20 text-magenta-300 border-magenta-500/30">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
