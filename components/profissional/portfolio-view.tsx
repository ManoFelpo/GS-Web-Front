"use client"

import { useState } from "react"
import { ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  projectUrl: string
  verified: boolean
}

export default function PortfolioView() {
  const [projects] = useState<Project[]>([
    {
      id: "1",
      title: "Dashboard de Análise de Dados",
      description: "Sistema interativo para visualização e análise de dados em tempo real",
      category: "Desenvolvimento",
      technologies: ["React", "TypeScript", "Recharts"],
      image: "/general-data-dashboard.png",
      projectUrl: "https://dashboard-demo.vercel.app",
      verified: true,
    },
    {
      id: "2",
      title: "App de Gerenciamento de Tarefas",
      description: "Aplicação web para organização e acompanhamento de projetos",
      category: "Desenvolvimento",
      technologies: ["Next.js", "Supabase", "Tailwind"],
      image: "/tasks-list.png",
      projectUrl: "https://task-app-demo.vercel.app",
      verified: true,
    },
    {
      id: "3",
      title: "Redesign de Landing Page",
      description: "Modernização visual com foco em conversão e experiência do usuário",
      category: "Design",
      technologies: ["Figma", "UI/UX"],
      image: "/abstract-design-elements.png",
      projectUrl: "https://landing-page-demo.vercel.app",
      verified: false,
    },
  ])

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Meu Portfólio
        </h1>
        <p className="text-foreground/60">Showcase de seus melhores projetos e realizações</p>
      </div>

      <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30">
        + Adicionar Projeto
      </Button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-xl"
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                {project.verified && (
                  <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                    <Check className="w-3 h-3" />
                    Verificado
                  </div>
                )}
              </div>
              <p className="text-foreground/60 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 text-primary border-primary/30 hover:bg-primary/10 bg-transparent"
                  asChild
                >
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Visitar Projeto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
