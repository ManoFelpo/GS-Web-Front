"use client"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, BookOpen, Award } from "lucide-react"

export default function AcademiaInterna() {
  const courses = [
    {
      name: "Introdução à IA e Machine Learning",
      duration: "8 semanas",
      enrolled: 156,
      completed: 89,
      color: "from-primary to-secondary",
      glow: "shadow-primary/30",
    },
    {
      name: "Liderança em Transformação Digital",
      duration: "6 semanas",
      enrolled: 67,
      completed: 45,
      color: "from-secondary to-accent",
      glow: "shadow-secondary/30",
    },
    {
      name: "Data Analytics Avançado",
      duration: "10 semanas",
      enrolled: 123,
      completed: 67,
      color: "from-accent to-primary",
      glow: "shadow-accent/30",
    },
    {
      name: "Soft Skills para Era Digital",
      duration: "4 semanas",
      enrolled: 234,
      completed: 198,
      color: "from-primary to-accent",
      glow: "shadow-primary/30",
    },
  ]

  const enrolledFunctionarios = [
    { dept: "Engenharia", pending: 45 },
    { dept: "Vendas", pending: 28 },
    { dept: "Operações", pending: 32 },
    { dept: "RH", pending: 12 },
  ]

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-2">
          Academia Interna
        </h1>
        <p className="text-foreground/60">Conecte sua força de trabalho às trilhas de requalificação WorkSphere</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass rounded-xl p-6 border border-white/20 shadow-lg shadow-primary/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-foreground/60 text-sm mb-1">Total Inscrito</p>
              <p className="text-4xl font-bold text-foreground">580</p>
              <p className="text-foreground/40 text-xs mt-2">Funcionários</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 border border-white/20 shadow-lg shadow-secondary/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-foreground/60 text-sm mb-1">Cursos Ativos</p>
              <p className="text-4xl font-bold text-foreground">4</p>
              <p className="text-foreground/40 text-xs mt-2">Em andamento</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-secondary/30">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 border border-white/20 shadow-lg shadow-accent/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-foreground/60 text-sm mb-1">Taxa Conclusão</p>
              <p className="text-4xl font-bold text-foreground">73%</p>
              <p className="text-secondary text-xs mt-2">Excelente</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-lg shadow-accent/30">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Cursos */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Programas Disponíveis</h2>
        {courses.map((course, idx) => {
          const completionRate = Math.round((course.completed / course.enrolled) * 100)
          return (
            <div
              key={idx}
              className={`glass rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl ${course.glow}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{course.name}</h3>
                  <p className="text-foreground/60 text-sm">Duração: {course.duration}</p>
                </div>
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${course.color} text-white rounded-lg font-bold shadow-lg ${course.glow}`}
                >
                  {completionRate}%
                </div>
              </div>

              <Progress value={completionRate} className="mb-4 bg-white/10" />

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-foreground/60 text-xs mb-1">Inscritos</p>
                  <p className="font-bold text-foreground">{course.enrolled}</p>
                </div>
                <div>
                  <p className="text-foreground/60 text-xs mb-1">Completados</p>
                  <p className="font-bold text-foreground">{course.completed}</p>
                </div>
                <div>
                  <p className="text-foreground/60 text-xs mb-1">Em Progresso</p>
                  <p className="font-bold text-foreground">{course.enrolled - course.completed}</p>
                </div>
              </div>

              <Button
                className={`w-full bg-gradient-to-r ${course.color} hover:shadow-lg ${course.glow} text-white font-semibold`}
              >
                Ver Detalhes
              </Button>
            </div>
          )
        })}
      </div>

      {/* Pending enrollments */}
      <div className="glass rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-foreground mb-4">Aguardando Matrícula</h2>
        <div className="space-y-3">
          {enrolledFunctionarios.map((dept, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 glass rounded-lg border border-white/20">
              <span className="font-medium text-foreground">{dept.dept}</span>
              <span className="font-bold text-secondary">{dept.pending} funcionários</span>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/40 text-white font-semibold">
          Matrícular Todos
        </Button>
      </div>
    </div>
  )
}
