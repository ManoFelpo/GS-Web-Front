"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Plataforma de IA para Análise de Dados",
      description:
        'Desenvolvida como projeto capstone na trilha "Introdução à IA". Utilizei Python, TensorFlow e análise preditiva.',
      skills: ["Python", "Machine Learning", "Data Analysis"],
      verified: true,
      link: "#",
      image: "/artificial-intelligence-data-analysis-dashboard.jpg",
    },
    {
      title: "Liderança de Transformação Digital em Startup",
      description: "Liderou equipe de 8 pessoas através de transformação digital, aumentando eficiência em 40%.",
      skills: ["Liderança", "Gestão de Projeto", "Inovação"],
      verified: true,
      link: "#",
      image: "/digital-transformation-team-collaboration-office.jpg",
    },
    {
      title: "Projeto de Sustentabilidade Corporativa",
      description: "Implementação de programa de requalificação que resultou em 50+ recolocações bem-sucedidas.",
      skills: ["Sustentabilidade", "RH", "Impacto Social"],
      verified: true,
      link: "#",
      image: "/corporate-sustainability-green-business-environmen.jpg",
    },
  ]

  const certifications = [
    { name: "AI Specialist Certification", issuer: "WorkSphere Academy", date: "Mar 2025", credential: "#" },
    { name: "Leadership Excellence", issuer: "WorkSphere Academy", date: "Jan 2025", credential: "#" },
    { name: "Sustainable Business Practices", issuer: "WorkSphere Academy", date: "Nov 2024", credential: "#" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Seu Portfólio</h1>
          <p className="text-foreground/60">Exiba seus projetos, certificações e realização à comunidade WorkSphere</p>
        </div>

        {/* Profile summary */}
        <Card className="p-8 border border-border mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">João Silva</h2>
              <p className="text-foreground/60 mb-4">Especialista em IA & Liderança | São Paulo, SP</p>
              <div className="flex flex-wrap gap-2">
                <Badge>IA</Badge>
                <Badge>Liderança</Badge>
                <Badge>Sustentabilidade</Badge>
                <Badge variant="secondary">Nível 12</Badge>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar Portfólio
            </Button>
          </div>
        </Card>

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Projetos Destaque</h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden border border-border hover:border-primary/50 transition-all">
                <div className="relative w-full h-48 bg-muted">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                        {project.title}
                        {project.verified && <Badge className="bg-accent text-accent-foreground">Verificado</Badge>}
                      </h3>
                      <p className="text-foreground/60 mt-2">{project.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-foreground/40 flex-shrink-0 ml-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Certificações</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all">
                <h3 className="font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/40 text-xs">{cert.date}</span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Ver
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
