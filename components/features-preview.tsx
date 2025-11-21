"use client"

import { Brain, Zap, Target, Leaf, BarChart3, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Mentor IA",
    description: "Conversa personalizada com IA que analisa suas habilidades e traça caminhos de carreira gamificados",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-400/30",
  },
  {
    icon: Target,
    title: "Trilhas de Aprendizado",
    description:
      "Navegue por uma galáxia de competências conectadas como planetas, cada uma com desafios e recompensas",
    color: "from-blue-500 to-magenta-500",
    glow: "shadow-blue-500/30",
  },
  {
    icon: Zap,
    title: "Desafios Imersivos",
    description: "Participe de simulações de cenários reais e ganhe medalhas enquanto demonstra suas habilidades",
    color: "from-magenta-500 to-cyan-400",
    glow: "shadow-magenta-500/30",
  },
  {
    icon: BarChart3,
    title: "Dashboard Empresarial",
    description: "Análise de tendências do mercado e simulações de impacto com FuturoSim para tomada de decisão",
    color: "from-cyan-400 to-magenta-500",
    glow: "shadow-cyan-400/30",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Acompanhe o impacto social e ambiental da requalificação profissional em tempo real",
    color: "from-magenta-500 to-blue-500",
    glow: "shadow-magenta-500/30",
  },
  {
    icon: Sparkles,
    title: "Marketplace Humano",
    description: "Encontre vagas com afinidade IA que alinham competências, propósito e valores pessoais",
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/30",
  },
]

export default function FeaturesPreview() {
  return (
    <section id="recursos" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-purple-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to transform your career or business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:shadow-xl hover:shadow-${feature.color.split("-")[1]}-400/30 transition-all hover:-translate-y-1 cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>

                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg ${feature.glow}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
