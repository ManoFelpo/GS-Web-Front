import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import GlobalNav from "@/components/global-nav"
import "./globals.css"

const _poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

const _inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "WorkSphere - Human Tech Revolution",
  description:
    "Plataforma que conecta profissionais, empresas e IA para transformar carreiras e preparar o futuro do trabalho.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_poppins.className} antialiased`}>
        <GlobalNav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
