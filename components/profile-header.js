"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, MapPin, Calendar, Mail, Briefcase, LinkIcon } from "lucide-react"
import { EditProfileDialog } from "@/components/edit-profile-dialog"

export function ProfileHeader() {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    title: "Aspiring Java Developer",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    bio: "Passionate about learning Java and building scalable applications. Currently focusing on Spring Boot and microservices architecture.",
    company: "Tech Startup Inc.",
    website: "alexjohnson.dev",
    github: "github.com/alexjohnson",
    linkedin: "linkedin.com/in/alexjohnson",
    joinDate: "January 2025",
  })

  const handleSave = (newData) => {
    setProfileData(newData)
    setIsEditOpen(false)
  }

  return (
    <>
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative">
            <div className="size-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <button className="absolute bottom-0 right-0 size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Camera className="size-4" />
            </button>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">{profileData.name}</h1>
                <p className="text-muted-foreground">{profileData.title}</p>
              </div>
              <Button variant="outline" onClick={() => setIsEditOpen(true)}>
                Edit Profile
              </Button>
            </div>

            {profileData.bio && <p className="text-sm text-foreground/80 mb-4 max-w-2xl">{profileData.bio}</p>}

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="size-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>Joined {profileData.joinDate}</span>
              </div>
              {profileData.email && (
                <div className="flex items-center gap-1">
                  <Mail className="size-4" />
                  <span>{profileData.email}</span>
                </div>
              )}
              {profileData.company && (
                <div className="flex items-center gap-1">
                  <Briefcase className="size-4" />
                  <span>{profileData.company}</span>
                </div>
              )}
            </div>

            {(profileData.website || profileData.github || profileData.linkedin) && (
              <div className="flex flex-wrap gap-3 mt-4">
                {profileData.website && (
                  <a
                    href={`https://${profileData.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <LinkIcon className="size-4" />
                    <span>{profileData.website}</span>
                  </a>
                )}
                {profileData.github && (
                  <a
                    href={`https://${profileData.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {profileData.linkedin && (
                  <a
                    href={`https://${profileData.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>

      <EditProfileDialog
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        profileData={profileData}
        onSave={handleSave}
      />
    </>
  )
}
