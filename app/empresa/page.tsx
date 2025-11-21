"use client"

import { useState } from "react"
import EmpresaLayout from "@/components/empresa/empresa-layout"
import DashboardEmpresa from "@/components/empresa/dashboard-empresa"
import FuturoSim from "@/components/empresa/futuro-sim"
import AcademiaInterna from "@/components/empresa/academia-interna"
import Insights from "@/components/empresa/insights"

export default function EmpresaPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <EmpresaLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "dashboard" && <DashboardEmpresa />}
      {activeTab === "futuroSim" && <FuturoSim />}
      {activeTab === "academia" && <AcademiaInterna />}
      {activeTab === "insights" && <Insights />}
    </EmpresaLayout>
  )
}
