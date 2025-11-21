"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Calendar, Zap, Edit, Award } from "lucide-react"

export default function ProfileView() {
  // Mock data - isso pode vir do banco de dados depois
  const profile = {
    fullName: "Ana Silva",
    email: "ana.silva@email.com",
    avatarUrl: "/placeholder-user.jpg",
    age: 28,
    bio: "Desenvolvedora Full Stack apaixonada por tecnologia e inovação. Buscando sempre aprender e crescer profissionalmente.",
    location: "São Paulo, SP",
    joinedDate: "Janeiro 2024",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "React", level: 4 },
      { name: "Node.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Python", level: 2 },
      { name: "SQL", level: 3 },
      { name: "Git", level: 4 },
      { name: "CSS", level: 4 },
    ],
    stats: {
      totalPoints: 2450,
      level: 8,
      completedChallenges: 23,
      learningPaths: 5,
    },
  }

  const getLevelColor = (level: number) => {
    if (level >= 4) return "bg-emerald-500"
    if (level >= 3) return "bg-blue-500"
    if (level >= 2) return "bg-yellow-500"
    return "bg-slate-500"
  }

  const getLevelText = (level: number) => {
    if (level >= 4) return "Avançado"
    if (level >= 3) return "Intermediário"
    if (level >= 2) return "Básico"
    return "Iniciante"
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
          <p className="text-foreground/60">Gerencie suas informações pessoais e habilidades</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
          <Edit className="w-4 h-4 mr-2" />
          Editar Perfil
        </Button>
      </div>

      {/* Profile Header Card */}
      <Card className="border-primary/20 bg-gradient-to-br from-slate-900 to-purple-950">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <Avatar className="w-32 h-32 border-4 border-cyan-400 shadow-lg shadow-cyan-400/50">
              <AvatarImage src={profile.avatarUrl || "/placeholder.svg"} alt={profile.fullName} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                {profile.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{profile.fullName}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    {profile.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {profile.age} anos
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {profile.location}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">{profile.bio}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400">{profile.stats.totalPoints}</div>
                  <div className="text-xs text-slate-400">Pontos</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">Nível {profile.stats.level}</div>
                  <div className="text-xs text-slate-400">Experiência</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">{profile.stats.completedChallenges}</div>
                  <div className="text-xs text-slate-400">Desafios</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-2xl font-bold text-emerald-400">{profile.stats.learningPaths}</div>
                  <div className="text-xs text-slate-400">Trilhas</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Habilidades</h3>
              <p className="text-sm text-foreground/60">Suas competências e níveis de proficiência</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {getLevelText(skill.level)}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full transition-all ${
                        level <= skill.level ? getLevelColor(skill.level) : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-6 border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
            <Zap className="w-4 h-4 mr-2" />
            Adicionar Nova Habilidade
          </Button>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Member Since */}
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Membro desde</h3>
                <p className="text-sm text-foreground/60">{profile.joinedDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Preview */}
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Conquistas</h3>
                <p className="text-sm text-foreground/60">15 badges desbloqueados</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
