"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function FuturoSim() {
  const [automationLevel, setAutomationLevel] = useState([50])
  const [scenario, setScenario] = useState<"conservative" | "realistic" | "aggressive">("realistic")

  const scenarios = {
    conservative: { jobsLost: "180", timeframe: "5 anos", impact: "Moderado" },
    realistic: { jobsLost: "285", timeframe: "3 anos", impact: "Significativo" },
    aggressive: { jobsLost: "450", timeframe: "2 anos", impact: "Crítico" },
  }

  const currentScenario = scenarios[scenario]

  const affectedRoles = [
    { role: "Analista de Dados", current: 45, risk: "Alto", automation: "78%" },
    { role: "Desenvolvededor Junior", current: 120, risk: "Médio", automation: "45%" },
    { role: "Operador de Suporte", current: 85, risk: "Alto", automation: "85%" },
    { role: "Especialista em QA", current: 65, risk: "Médio", automation: "62%" },
    { role: "Arquiteto de Soluções", current: 25, risk: "Baixo", automation: "15%" },
  ]

  const recommendations = [
    "Acelerar programa de requalificação para Inteligência Artificial",
    "Investir em desenvolvimento de liderança e habilidades soft",
    "Criar trilhas de transição para cargos de menor risco",
    "Estabelecer parcerias com plataformas de aprendizado contínuo",
    "Implementar programa de mentooria entre especialistas",
  ]

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
          FuturoSim - Simulador de Impacto
        </h1>
        <p className="text-foreground/60">Visualize como a automatização IA afetará sua força de trabalho</p>
      </div>

      <div className="glass rounded-xl p-8 border border-white/20">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">Escolha o Cenário</h2>
            <div className="grid grid-cols-3 gap-4">
              {(["conservative", "realistic", "aggressive"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setScenario(s)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    scenario === s
                      ? "glass border-accent bg-gradient-to-r from-accent/20 to-primary/10 shadow-lg shadow-accent/30"
                      : "border-white/20 glass hover:border-white/40"
                  }`}
                >
                  <p className="font-bold text-foreground capitalize">
                    {s === "conservative" ? "Conservador" : s === "realistic" ? "Realista" : "Agressivo"}
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">
                    {s === "conservative"
                      ? "Crescimento lento de IA"
                      : s === "realistic"
                        ? "Adoção moderada"
                        : "Transformação rápida"}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Main metrics */}
          <div className="bg-gradient-to-r from-accent/15 to-primary/10 p-6 rounded-lg border border-accent/30">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-foreground/60 text-sm mb-1">Funcionários Afetados</p>
                <p className="text-3xl font-bold text-accent">{currentScenario.jobsLost}</p>
              </div>
              <div>
                <p className="text-foreground/60 text-sm mb-1">Timeframe</p>
                <p className="text-3xl font-bold text-foreground">{currentScenario.timeframe}</p>
              </div>
              <div>
                <p className="text-foreground/60 text-sm mb-1">Impacto Geral</p>
                <p className="text-3xl font-bold text-foreground">{currentScenario.impact}</p>
              </div>
              <div>
                <p className="text-foreground/60 text-sm mb-1">Custos Estimados</p>
                <p className="text-3xl font-bold text-foreground">R$ 2.8M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Affected roles */}
      <div className="glass rounded-xl p-6 border border-white/20">
        <h2 className="text-lg font-bold text-foreground mb-4">Cargos Mais Afetados</h2>
        <div className="space-y-3">
          {affectedRoles.map((role, idx) => (
            <div key={idx} className="p-4 glass rounded-lg border border-white/20">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold text-foreground">{role.role}</p>
                  <p className="text-sm text-foreground/60">{role.current} funcionários</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    role.risk === "Alto"
                      ? "bg-accent/20 text-accent"
                      : role.risk === "Médio"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-secondary/20 text-secondary"
                  }`}
                >
                  Risco {role.risk}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-accent to-primary h-2 rounded-full"
                  style={{ width: `${role.automation}` }}
                ></div>
              </div>
              <p className="text-xs text-foreground/60 mt-1">Automação: {role.automation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="glass rounded-xl p-6 border border-white/20 bg-primary/5">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <h2 className="text-lg font-bold text-foreground">Recomendações Estratégicas</h2>
        </div>
        <ul className="space-y-3">
          {recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground">
              <span className="text-primary font-bold flex-shrink-0">→</span>
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to action */}
      <div className="flex gap-4">
        <Button className="flex-1 bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/40 text-white font-semibold">
          Conectar com Academia WorkSphere
        </Button>
        <Button className="flex-1 glass border border-white/20 text-foreground hover:bg-white/20">
          Exportar Relatório
        </Button>
      </div>
    </div>
  )
}
