"use client"

import { useState } from "react"
import { Search, Filter, Heart, MapPin, DollarSign } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  matchScore: number
  tags: string[]
  impact: "Alto" | "Médio" | "Baixo"
  remote: boolean
  featured: boolean
}

export default function MarketplacePage() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Senior AI/ML Engineer",
      company: "TechCorp",
      location: "São Paulo, SP",
      salary: "R$ 15k - 20k",
      matchScore: 92,
      tags: ["IA", "Machine Learning", "Python", "Liderança"],
      impact: "Alto",
      remote: true,
      featured: true,
    },
    {
      id: "2",
      title: "Product Manager - Inovação",
      company: "InnovateTech",
      location: "Remoto",
      salary: "R$ 12k - 16k",
      matchScore: 85,
      tags: ["Produto", "Estratégia", "Criatividade", "Comunicação"],
      impact: "Alto",
      remote: true,
      featured: true,
    },
    {
      id: "3",
      title: "Tech Lead - Infraestrutura",
      company: "DataFlow",
      location: "Rio de Janeiro, RJ",
      salary: "R$ 14k - 18k",
      matchScore: 78,
      tags: ["DevOps", "Arquitetura", "Liderança"],
      impact: "Médio",
      remote: false,
      featured: false,
    },
    {
      id: "4",
      title: "Sustainability Consultant",
      company: "EcoGreen",
      location: "Remoto",
      salary: "R$ 10k - 14k",
      matchScore: 88,
      tags: ["Sustentabilidade", "Consultoria", "Impacto Social"],
      impact: "Alto",
      remote: true,
      featured: false,
    },
  ])

  const [saved, setSaved] = useState<string[]>([])
  const [filter, setFilter] = useState("all")

  const handleSaveJob = (id: string) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]))
  }

  const filteredJobs = filter === "saved" ? jobs.filter((j) => saved.includes(j.id)) : jobs

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-6">Marketplace de Oportunidades</h1>

          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Buscar por cargo, empresa ou habilidade..."
                className="pl-10 bg-background border border-border"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mt-4">
            {["all", "featured", "saved"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground/70 hover:text-foreground"
                }`}
              >
                {f === "all" ? "Todas" : f === "featured" ? "Destaque" : "Salvas"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Jobs grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className={`p-6 border hover:border-primary/50 transition-all group cursor-pointer ${
                job.featured ? "border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5" : "border-border"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    {job.featured && (
                      <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded">
                        Destaque
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/60 text-sm">{job.company}</p>
                </div>
                <button
                  onClick={() => handleSaveJob(job.id)}
                  className="text-foreground/40 hover:text-accent transition-colors"
                >
                  <Heart className={`w-6 h-6 ${saved.includes(job.id) ? "fill-accent text-accent" : ""}`} />
                </button>
              </div>

              {/* Info */}
              <div className="space-y-2 mb-4 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {job.location} {job.remote && "• Remoto"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Match score */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-foreground/60">Afinidade com seu perfil</span>
                  <span className="text-sm font-bold text-primary">{job.matchScore}%</span>
                </div>
                <div className="w-full bg-input rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    style={{ width: `${job.matchScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted text-foreground/70 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact badge */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    job.impact === "Alto"
                      ? "bg-accent/20 text-accent"
                      : job.impact === "Médio"
                        ? "bg-yellow-500/20 text-yellow-600"
                        : "bg-green-500/20 text-green-600"
                  }`}
                >
                  Impacto {job.impact}
                </span>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Ver Detalhes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
