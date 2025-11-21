"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Users, TrendingUp } from "lucide-react"

export default function CompaniesPage() {
  const companies = [
    {
      name: "TechCorp",
      sector: "Tecnologia",
      employees: "1,250",
      requalified: "187",
      impact: "Redução de 45t CO₂/ano via trabalho remoto",
      status: "Lider em Requalificação",
    },
    {
      name: "DataFlow",
      sector: "Analytics",
      employees: "456",
      requalified: "89",
      impact: "12 novos cargos em IA criados",
      status: "Inovador em Carreira",
    },
    {
      name: "InnovateTech",
      sector: "Consultoria",
      employees: "320",
      requalified: "67",
      impact: "Aumento de 78% em satisfação dos colaboradores",
      status: "Comprometida com ESG",
    },
    {
      name: "EcoGreen",
      sector: "Sustentabilidade",
      employees: "189",
      requalified: "45",
      impact: "100% dos funcionários com acesso a cursos",
      status: "Champion de Sustentabilidade",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Empresas Comprometidas</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Conheça as organizações que estão transformando o futuro do trabalho através de requalificação e
            sustentabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {companies.map((company, idx) => (
            <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{company.name}</h3>
                  <p className="text-foreground/60 text-sm">{company.sector}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{company.employees} funcionários</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-foreground">{company.requalified} requalificados</span>
                </div>
              </div>

              <p className="text-foreground/60 text-sm mb-4">{company.impact}</p>

              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded">
                {company.status}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
