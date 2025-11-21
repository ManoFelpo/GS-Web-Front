"use client"

import { Search, MapPin, Award, Star, Mail, Calendar, Target, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface UserProfile {
  id: number
  name: string
  age: number
  email: string
  location: string
  avatar: string
  role: string
  level: number
  points: number
  completedChallenges: number
  learningPaths: number
  joinedDate: string
  skills: { name: string; level: number }[]
  bio: string
}

const users: UserProfile[] = [
  {
    id: 1,
    name: "Ana Silva",
    age: 28,
    email: "ana.silva@email.com",
    location: "São Paulo, SP",
    avatar: "/professional-woman-smiling.png",
    role: "Desenvolvedora Full Stack",
    level: 12,
    points: 2450,
    completedChallenges: 23,
    learningPaths: 5,
    joinedDate: "2024-01-15",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "CSS", level: 87 },
      { name: "Git", level: 90 },
    ],
    bio: "Apaixonada por tecnologia e sustentabilidade",
  },
  {
    id: 2,
    name: "Mariana Costa",
    age: 32,
    email: "mariana.costa@email.com",
    location: "Rio de Janeiro, RJ",
    avatar: "/professional-business-woman.png",
    role: "UX/UI Designer",
    level: 15,
    points: 3200,
    completedChallenges: 31,
    learningPaths: 7,
    joinedDate: "2023-09-20",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Design Thinking", level: 92 },
      { name: "Prototipagem", level: 88 },
      { name: "Adobe XD", level: 85 },
      { name: "User Research", level: 90 },
      { name: "Wireframing", level: 93 },
    ],
    bio: "Criando experiências memoráveis para usuários",
  },
  {
    id: 3,
    name: "Juliana Oliveira",
    age: 26,
    email: "juliana.oliveira@email.com",
    location: "Belo Horizonte, MG",
    avatar: "/young-professional-woman.png",
    role: "Data Scientist",
    level: 10,
    points: 1890,
    completedChallenges: 18,
    learningPaths: 4,
    joinedDate: "2024-03-10",
    skills: [
      { name: "Python", level: 92 },
      { name: "Machine Learning", level: 87 },
      { name: "SQL", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "TensorFlow", level: 82 },
      { name: "Data Visualization", level: 88 },
    ],
    bio: "Transformando dados em insights valiosos",
  },
  {
    id: 4,
    name: "Carla Santos",
    age: 35,
    email: "carla.santos@email.com",
    location: "Curitiba, PR",
    avatar: "/professional-woman-executive.png",
    role: "Product Manager",
    level: 18,
    points: 4100,
    completedChallenges: 42,
    learningPaths: 9,
    joinedDate: "2023-05-12",
    skills: [
      { name: "Gestão de Produtos", level: 94 },
      { name: "Agile", level: 90 },
      { name: "Liderança", level: 93 },
      { name: "Roadmapping", level: 91 },
      { name: "Análise de Métricas", level: 89 },
      { name: "Stakeholder Management", level: 92 },
    ],
    bio: "Liderando equipes para criar produtos incríveis",
  },
  {
    id: 5,
    name: "Beatriz Lima",
    age: 29,
    email: "beatriz.lima@email.com",
    location: "Porto Alegre, RS",
    avatar: "/professional-woman-tech.jpg",
    role: "DevOps Engineer",
    level: 13,
    points: 2680,
    completedChallenges: 26,
    learningPaths: 6,
    joinedDate: "2023-11-08",
    skills: [
      { name: "Kubernetes", level: 88 },
      { name: "Docker", level: 91 },
      { name: "AWS", level: 86 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 85 },
      { name: "Linux", level: 89 },
    ],
    bio: "Automatizando processos e otimizando infraestrutura",
  },
  {
    id: 6,
    name: "Fernanda Rodrigues",
    age: 31,
    email: "fernanda.rodrigues@email.com",
    location: "Brasília, DF",
    avatar: "/professional-woman-consultant.png",
    role: "Consultora de Negócios",
    level: 14,
    points: 2890,
    completedChallenges: 29,
    learningPaths: 7,
    joinedDate: "2023-08-25",
    skills: [
      { name: "Estratégia", level: 89 },
      { name: "Análise de Mercado", level: 87 },
      { name: "Consultoria", level: 91 },
      { name: "Business Intelligence", level: 86 },
      { name: "Planejamento Estratégico", level: 90 },
      { name: "Gestão de Projetos", level: 88 },
    ],
    bio: "Ajudando empresas a alcançarem seus objetivos",
  },
  {
    id: 7,
    name: "Camila Ferreira",
    age: 27,
    email: "camila.ferreira@email.com",
    location: "Florianópolis, SC",
    avatar: "/professional-woman-developer.png",
    role: "Mobile Developer",
    level: 11,
    points: 2150,
    completedChallenges: 21,
    learningPaths: 5,
    joinedDate: "2024-02-01",
    skills: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 82 },
      { name: "Mobile UI", level: 88 },
      { name: "iOS Development", level: 85 },
      { name: "Android Development", level: 86 },
      { name: "API Integration", level: 89 },
    ],
    bio: "Criando aplicativos mobile inovadores",
  },
  {
    id: 8,
    name: "Patrícia Almeida",
    age: 33,
    email: "patricia.almeida@email.com",
    location: "Salvador, BA",
    avatar: "/professional-woman-manager.png",
    role: "Scrum Master",
    level: 16,
    points: 3450,
    completedChallenges: 35,
    learningPaths: 8,
    joinedDate: "2023-07-14",
    skills: [
      { name: "Scrum", level: 96 },
      { name: "Facilitação", level: 92 },
      { name: "Coaching", level: 89 },
      { name: "Kanban", level: 88 },
      { name: "Team Building", level: 91 },
      { name: "Conflict Resolution", level: 87 },
    ],
    bio: "Facilitando a colaboração e entrega de valor",
  },
]

export default function ComunidadePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skills.some((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleViewProfile = (user: UserProfile) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", { year: "numeric", month: "long" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 text-balance">Comunidade de Profissionais</h1>
          <p className="text-slate-300 text-lg text-pretty">Conecte-se com profissionais talentosas de todo o Brasil</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Buscar por nome, função ou habilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-cyan-400"
            />
          </div>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card
              key={user.id}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* User Header */}
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-20 h-20 border-2 border-cyan-400">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-cyan-400 text-slate-900 text-lg font-bold">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{user.name}</h3>
                    <p className="text-sm text-slate-400 mb-2">{user.age} anos</p>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin size={12} />
                      <span>{user.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="mb-4">
                  <p className="text-cyan-400 font-medium mb-2">{user.role}</p>
                  <p className="text-sm text-slate-300 text-pretty">{user.bio}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <Award className="text-yellow-400" size={16} />
                    <span className="text-sm text-slate-300">
                      Nível <span className="font-bold text-white">{user.level}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="text-cyan-400" size={16} />
                    <span className="text-sm text-slate-300">
                      <span className="font-bold text-white">{user.points}</span> pts
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3 mb-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Top Skills</p>
                  {user.skills.slice(0, 3).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className="text-xs text-cyan-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  onClick={() => handleViewProfile(user)}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-400/30"
                  size="sm"
                >
                  Ver Perfil Completo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Nenhum profissional encontrado com esses critérios.</p>
          </div>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedUser && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">Perfil Detalhado</DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* User Header Section */}
                <div className="flex items-start gap-6 pb-6 border-b border-slate-700">
                  <Avatar className="w-32 h-32 border-4 border-cyan-400">
                    <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} alt={selectedUser.name} />
                    <AvatarFallback className="bg-cyan-400 text-slate-900 text-3xl font-bold">
                      {selectedUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedUser.name}</h2>
                    <p className="text-cyan-400 text-xl font-medium mb-3">{selectedUser.role}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        <span>{selectedUser.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-slate-400" />
                        <span>{selectedUser.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400" />
                        <span>{selectedUser.age} anos</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sobre</h3>
                  <p className="text-slate-300 text-pretty">{selectedUser.bio}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-slate-900/50 border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="text-yellow-400" size={20} />
                      <span className="text-xs text-slate-400 uppercase">Nível</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedUser.level}</p>
                  </Card>
                  <Card className="bg-slate-900/50 border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-cyan-400" size={20} />
                      <span className="text-xs text-slate-400 uppercase">Pontos</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedUser.points}</p>
                  </Card>
                  <Card className="bg-slate-900/50 border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-green-400" size={20} />
                      <span className="text-xs text-slate-400 uppercase">Desafios</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedUser.completedChallenges}</p>
                  </Card>
                  <Card className="bg-slate-900/50 border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-purple-400" size={20} />
                      <span className="text-xs text-slate-400 uppercase">Trilhas</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{selectedUser.learningPaths}</p>
                  </Card>
                </div>

                {/* Member Since */}
                <div className="flex items-center gap-2 text-sm text-slate-400 pb-4 border-b border-slate-700">
                  <Calendar size={16} />
                  <span>Membro desde {formatDate(selectedUser.joinedDate)}</span>
                </div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Habilidades</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedUser.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                          <Badge variant="outline" className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-400/30">
                    Conectar
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  >
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
