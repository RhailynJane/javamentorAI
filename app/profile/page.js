"use client"

import { useState } from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileStats } from "@/components/profile-stats"
import { LearningProgress } from "@/components/learning-progress"
import { Achievements } from "@/components/achievements"
import { SkillsChart } from "@/components/skills-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SettingsForm } from "@/components/settings-form"
import { Card, CardContent } from "@/components/ui/card"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "Rhailyn Jane Cona",
    title: "Student",
    location: "Calgary, AB",
    email: "crhailynjane@gmail.com",
    bio: "Aspiring Java developer focused on building solid fundamentals and real-world projects.",
    company: "",
    website: "rhailynjane.dev",
    github: "github.com/RhailynJane?01&to=2025-06-30",
    linkedin: "linkedin.com/in/rhailyn-cona/",
    joinDate: "October 2025",
    avatarUrl: "",
  })

  const handleSave = (newData) => setProfileData((prev) => ({ ...prev, ...newData }))
  const handleAvatarChange = (url) => setProfileData((prev) => ({ ...prev, avatarUrl: url }))

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
  <ProfileHeader profileData={profileData} onAvatarChange={handleAvatarChange} />

        <Tabs defaultValue="overview" className="mt-8">
          {/* Full-width card-like tab bar */}
          <TabsList className="w-full rounded-lg border bg-card p-1 shadow-sm flex">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
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
            {/* Settings in a card matching Profile card width */}
            <Card className="">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-lg font-semibold">Profile Information</h3>
                <SettingsForm
                  key={`${profileData.name}-${profileData.email}-${profileData.location}`}
                  profileData={profileData}
                  onSave={handleSave}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
