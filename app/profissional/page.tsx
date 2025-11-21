"use client"

import { useState } from "react"
import ProfissionalLayout from "@/components/profissional/profissional-layout"
import DashboardOverview from "@/components/profissional/dashboard-overview"
import ProfileView from "@/components/profissional/profile-view"
import MentorAI from "@/components/profissional/mentor-ai"
import SkillsMap from "@/components/profissional/skills-map"
import LearningPaths from "@/components/profissional/learning-paths"
import PortfolioView from "@/components/profissional/portfolio-view"
import AchievementsView from "@/components/profissional/achievements-view"
import ChallengesView from "@/components/profissional/challenges-view"

export default function ProfissionalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <ProfissionalLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "dashboard" && <DashboardOverview />}
      {activeTab === "profile" && <ProfileView />}
      {activeTab === "mentor" && <MentorAI />}
      {activeTab === "skills" && <SkillsMap />}
      {activeTab === "trilhas" && <LearningPaths />}
      {activeTab === "portfolio" && <PortfolioView />}
      {activeTab === "achievements" && <AchievementsView />}
      {activeTab === "challenges" && <ChallengesView />}
    </ProfissionalLayout>
  )
}
