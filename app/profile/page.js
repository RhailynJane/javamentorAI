"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileStats } from "@/components/profile-stats"
import { LearningProgress } from "@/components/learning-progress"
import { Achievements } from "@/components/achievements"
import { SkillsChart } from "@/components/skills-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SettingsForm } from "@/components/settings-form"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        <ProfileHeader />

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ProfileStats />
                <LearningProgress />
                <SkillsChart />
              </div>
              <div>
                <Achievements />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="max-w-3xl">
              <SettingsForm />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
