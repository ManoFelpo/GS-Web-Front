"use client"
import { TrendingUp, Users, Zap, Target, AlertCircle } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function DashboardEmpresa() {
  const metrics = [
    {
      label: "Funcionários",
      value: "1,250",
      subtext: "+12% vs. mês anterior",
      icon: Users,
      color: "from-secondary to-accent",
      glow: "shadow-secondary/30",
    },
    {
      label: "Taxa de Requalificação",
      value: "68%",
      subtext: "Meta: 75%",
      icon: TrendingUp,
      color: "from-accent to-primary",
      glow: "shadow-accent/30",
    },
    {
      label: "Cursos Ativos",
      value: "23",
      subtext: "456 inscritos",
      icon: Zap,
      color: "from-primary to-secondary",
      glow: "shadow-primary/30",
    },
    {
      label: "Impacto de IA",
      value: "Alto",
      subtext: "Automatização crescente",
      icon: Target,
      color: "from-secondary to-accent",
      glow: "shadow-secondary/30",
    },
  ]

  const trendData = [
    { month: "Jan", requalificacao: 45, impacto: 20 },
    { month: "Fev", requalificacao: 52, impacto: 28 },
    { month: "Mar", requalificacao: 58, impacto: 35 },
    { month: "Abr", requalificacao: 65, impacto: 42 },
    { month: "Mai", requalificacao: 68, impacto: 48 },
  ]

  const departamentos = [
    { dept: "Engenharia", funcionarios: 320, risco: "Alto", color: "#FF6B6B" },
    { dept: "Vendas", funcionarios: 210, risco: "Médio", color: "#FFA500" },
    { dept: "RH", funcionarios: 85, risco: "Baixo", color: "#82C922" },
    { dept: "Financeiro", funcionarios: 150, risco: "Alto", color: "#FF6B6B" },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-2">
          Dashboard Corporativo
        </h1>
        <p className="text-foreground/60">Visão em tempo real da transformação digital da sua empresa</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon
          return (
            <div
              key={idx}
              className={`glass rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all hover:shadow-xl ${metric.glow}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-foreground/60 text-sm mb-1">{metric.label}</p>
                  <p className="text-3xl font-bold text-foreground mb-2">{metric.value}</p>
                  <p className="text-foreground/40 text-xs">{metric.subtext}</p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center shadow-lg ${metric.glow}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Trend chart */}
        <div className="glass rounded-xl p-6 border border-white/20">
          <h2 className="text-lg font-bold text-foreground mb-4">Tendências - Últimos 5 meses</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="var(--color-foreground)" opacity={0.6} />
              <YAxis stroke="var(--color-foreground)" opacity={0.6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(13, 14, 17, 0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="requalificacao" stroke="#6C63FF" strokeWidth={2} name="Requalificação %" />
              <Line type="monotone" dataKey="impacto" stroke="#FF4FD8" strokeWidth={2} name="Impacto IA %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Department risk */}
        <div className="glass rounded-xl p-6 border border-white/20">
          <h2 className="text-lg font-bold text-foreground mb-4">Risco por Departamento</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departamentos}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="dept" stroke="var(--color-foreground)" opacity={0.6} />
              <YAxis stroke="var(--color-foreground)" opacity={0.6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(13, 14, 17, 0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="funcionarios" fill="#00E6A8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Alerts */}
      <div className="glass rounded-xl p-6 border border-white/20">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-accent" />
          <h2 className="text-lg font-bold text-foreground">Alertas Importantes</h2>
        </div>
        <div className="space-y-3">
          {[
            "68% dos engenheiros correm risco alto de automação",
            "Academia Interna: 245 funcionários aguardando matrícula",
            "Meta de requalificação para Q2 ainda em 68%",
          ].map((alert, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/30">
              <div className="w-2 h-2 bg-accent rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-foreground">{alert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
