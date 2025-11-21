"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export default function MentorAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Olá! Sou seu Mentor IA. Estou aqui para ajudar você a descobrir seu potencial, traçar caminhos de carreira e guiar seu desenvolvimento. O que gostaria de explorar hoje?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const responses = [
        'Ótima pergunta! Baseado em seus dados, vejo que você tem forte inclinação para liderança. Recomendo explorar a trilha "Liderança de Equipes Remotas".',
        "Seus resultados indicam um perfil criativo e inovador. Que tal participar de nossos desafios de inovação?",
        "Vejo que você tem interesse em sustentabilidade. Conecte-se a empresas que compartilham seus valores!",
        "Com sua trajetória, você seria perfeito para uma transição para gestão. Quer que eu mostre oportunidades nessa área?",
      ]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
          Seu Mentor IA
        </h1>
        <p className="text-foreground/60">Uma parceira inteligente para sua evolução profissional</p>
      </div>

      <div className="flex-1 flex flex-col glass border border-white/20 rounded-xl mb-6 overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-4 ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              {message.type === "ai" && (
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                  <span className="text-white font-bold text-xs">IA</span>
                </div>
              )}
              <div
                className={`max-w-md lg:max-w-2xl px-4 py-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-primary to-secondary text-white rounded-br-none shadow-lg shadow-primary/30"
                    : "glass bg-white/50 text-foreground rounded-bl-none border border-white/20"
                }`}
              >
                <p className="leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${message.type === "user" ? "text-white/70" : "text-foreground/60"}`}>
                  {message.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="glass px-4 py-3 rounded-lg border border-white/20">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-white/20 p-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Digite sua pergunta..."
              className="flex-1 px-4 py-2 bg-white/30 border border-white/20 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/40 text-white"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <p className="text-foreground/60 text-sm mb-3">Sugestões de tópicos:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Como evoluir em liderança?",
            "Qual trilha me recomenda?",
            "Oportunidades para mim?",
            "Como melhorar criatividade?",
          ].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                setInput(suggestion)
                setTimeout(() => handleSendMessage(), 100)
              }}
              className="px-4 py-2 glass border border-white/20 text-foreground rounded-lg text-sm hover:bg-white/40 transition-all"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
