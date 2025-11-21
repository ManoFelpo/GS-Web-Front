"use client"

import { Leaf, Users, TrendingUp, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function SustentabilidadePage() {
  const impactData = [
    { month: "Jan", co2savings: 125, employed: 45, companies: 12 },
    { month: "Fev", co2savings: 188, employed: 67, companies: 18 },
    { month: "Mar", co2savings: 234, employed: 89, companies: 25 },
    { month: "Abr", co2savings: 312, employed: 124, companies: 34 },
    { month: "Mai", co2savings: 425, employed: 178, companies: 47 },
  ]

  const impactMetrics = [
    { label: "CO₂ Economizado (t)", value: "425", icon: Leaf, unit: "toneladas" },
    { label: "Pessoas Recolocadas", value: "178", icon: Users, unit: "profissionais" },
    { label: "Empresas Aderidas", value: "47", icon: Award, unit: "empresas" },
    { label: "Crescimento Mensal", value: "+38%", icon: TrendingUp, unit: "taxa de crescimento" },
  ]

  const projectsBySDG = [
    { sdg: "Educação de Qualidade (ODS 4)", projects: 34, impact: "Alto" },
    { sdg: "Emprego Digno (ODS 8)", projects: 67, impact: "Alto" },
    { sdg: "Redução de Desigualdades (ODS 10)", projects: 28, impact: "Médio" },
    { sdg: "Ação Climática (ODS 13)", projects: 23, impact: "Alto" },
  ]

  const colors = ["#45b56b", "#82C922", "#65c7f7", "#f59e0b"]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent via-primary to-secondary py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impacto Ambiental e Social</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            WorkSphere não é só sobre transformação de carreiras. É sobre transformação do mundo através do trabalho
            significativo e sustentável.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-foreground/40 text-xs mt-1">{metric.unit}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* CO2 Savings trend */}
          <Card className="p-6 border border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Redução de CO₂ - Últimos 5 meses</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={impactData}>
                <defs>
                  <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-foreground)" opacity={0.6} />
                <YAxis stroke="var(--color-foreground)" opacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="co2savings"
                  stroke="var(--color-accent)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCO2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Projects by SDG */}
          <Card className="p-6 border border-border">
            <h2 className="text-lg font-bold text-foreground mb-4">Projetos por ODS</h2>
            <div className="space-y-4">
              {projectsBySDG.map((project, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{project.sdg}</span>
                    <span className="text-sm font-bold text-foreground">{project.projects}</span>
                  </div>
                  <div className="w-full bg-input rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(project.projects / 100) * 100}%`,
                        backgroundColor: colors[idx % colors.length],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Stories */}
        <Card className="p-8 border border-border bg-muted/30">
          <h2 className="text-2xl font-bold text-foreground mb-6">Histórias de Impacto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Lucia Martins",
                story:
                  "Requalificada em IA, Lucia conseguiu um cargo na TechCorp com 45% mais salário. Ela agora trabalha remoto, economizando 2 horas diárias de deslocamento.",
                impact: "CO₂ evitado: 1.2t/ano",
              },
              {
                name: "Programa EcoGreen",
                story:
                  "DataFlow aderiu à Academia WorkSphere e requalificou 67 funcionários. 45 foram redirecionados para cargos mais humanos e sustentáveis.",
                impact: "Recolocações: 67 profissionais",
              },
              {
                name: "Voluntariado Digital",
                story:
                  "Rafael usa suas novas habilidades para mentorear 12 jovens em comunidades carentes, criando oportunidades educacionais.",
                impact: "Alcance: 150+ pessoas",
              },
              {
                name: "Transformação Corporativa",
                story:
                  "InnovateTech conectou suas metas ESG com WorkSphere, criando uma cultura de aprendizado contínuo e diversidade.",
                impact: "Satisfação: +78%",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-card rounded-lg border border-border">
                <p className="font-bold text-foreground mb-2">{item.name}</p>
                <p className="text-foreground/60 text-sm mb-3">{item.story}</p>
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Call to action */}
      <section className="bg-muted/50 py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Seja parte dessa transformação</h2>
          <p className="text-foreground/60 mb-6">
            Cada profissional requalificado, cada empresa comprometida, cada oportunidade significativa contribui para
            um futuro mais sustentável.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold transition-colors">
              Comece sua Jornada
            </button>
            <button className="px-8 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-bold transition-colors">
              Relatório Completo
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
