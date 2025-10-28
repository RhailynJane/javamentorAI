"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Camera, MapPin, Calendar, Mail, Briefcase, LinkIcon } from "lucide-react"

// Accept profile data and an avatar change handler
export function ProfileHeader({ profileData, onAvatarChange }) {
  const fileRef = useRef(null)

  const onPickFile = () => fileRef.current?.click()
  const onFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onAvatarChange?.(url)
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative">
          <div className="size-24 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
            {profileData.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profileData.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl font-bold text-primary-foreground">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
          <button
            onClick={onPickFile}
            title="Update avatar"
            className="absolute top-1/2 -translate-y-1/2 -right-2 z-10 size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 shadow transition-colors"
          >
            <Camera className="size-4" />
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFileChange}
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-1">{profileData.name}</h1>
              <p className="text-muted-foreground">{profileData.title}</p>
            </div>
            {/* Edit button moved to Settings */}
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
  )
}
