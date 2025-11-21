"use client"

import { TrendingUp, AlertCircle, Lightbulb } from "lucide-react"

export default function Insights() {
  const insights = [
    {
      title: "Tendência: Demanda crescente por habilidades em IA",
      description: "Empresas que investem em requalificação em IA têm 40% menos rotatividade",
      type: "positive",
      icon: TrendingUp,
    },
    {
      title: "Alerta: Skill Gap crítico em Segurança",
      description: "Apenas 15% dos seus funcionários têm certificação em segurança de dados",
      type: "alert",
      icon: AlertCircle,
    },
    {
      title: "Oportunidade: Programa Mentoria Reversa",
      description: "Combinar experts sênior com talentos jovens aumenta inovação em 35%",
      type: "insight",
      icon: Lightbulb,
    },
    {
      title: "Benchmarking: Como você se compara",
      description: "Taxa de requalificação: 68% vs. Indústria: 52% ✓ Você está acima da média",
      type: "positive",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Insights IA Generativo
        </h1>
        <p className="text-foreground/60">Análises inteligentes e recomendações estratégicas para sua organização</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {insights.map((insight, idx) => {
          const Icon = insight.icon
          let bgColor, iconColor, glow
          if (insight.type === "positive") {
            bgColor = "bg-secondary/10 border-secondary/30"
            iconColor = "text-secondary"
            glow = "shadow-secondary/30"
          } else if (insight.type === "alert") {
            bgColor = "bg-accent/10 border-accent/30"
            iconColor = "text-accent"
            glow = "shadow-accent/30"
          } else {
            bgColor = "bg-primary/10 border-primary/30"
            iconColor = "text-primary"
            glow = "shadow-primary/30"
          }

          return (
            <div
              key={idx}
              className={`glass rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl ${glow}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${
                    insight.type === "positive"
                      ? "from-secondary to-accent"
                      : insight.type === "alert"
                        ? "from-accent to-primary"
                        : "from-primary to-secondary"
                  } shadow-lg ${glow}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2">{insight.title}</h3>
                  <p className="text-foreground/60 text-sm">{insight.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recommendations */}
      <div className="glass rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Plano de Ação Recomendado</h2>
        <div className="space-y-4">
          {[
            { timeframe: "Q1 2025", action: "Iniciar programa de IA para 100 profissionais de alto potencial" },
            { timeframe: "Q2 2025", action: "Implementar certificação em Segurança de Dados para toda equipe" },
            { timeframe: "Q3 2025", action: "Lançar programa de Mentoria Reversa com 50 duplas" },
            { timeframe: "Q4 2025", action: "Avaliar ROI de requalificação e renovar roadmap" },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 pb-4 border-b border-white/20 last:border-0">
              <div className="w-24 flex-shrink-0">
                <span className="font-bold text-secondary text-sm">{item.timeframe}</span>
              </div>
              <p className="text-foreground">{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
