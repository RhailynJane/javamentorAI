"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function SettingsForm({ profileData, onSave }) {
  // Profile form state - initialize from props at mount
  const [form, setForm] = useState(() => ({
    name: profileData?.name ?? "",
    title: profileData?.title ?? "",
    email: profileData?.email ?? "",
    location: profileData?.location ?? "",
    company: profileData?.company ?? "",
    website: profileData?.website ?? "",
    github: profileData?.github ?? "",
    linkedin: profileData?.linkedin ?? "",
    bio: profileData?.bio ?? "",
  }))

  const [teachingStyle, setTeachingStyle] = useState("friendly")
  const [difficulty, setDifficulty] = useState([50])
  const [notifications, setNotifications] = useState(true)
  const [dailyGoal, setDailyGoal] = useState("30")
  const [successOpen, setSuccessOpen] = useState(false)

  const handleChange = (field, value) => setForm((p) => ({ ...p, [field]: value }))
  const handleCancel = () => setForm({
    name: profileData?.name ?? "",
    title: profileData?.title ?? "",
    email: profileData?.email ?? "",
    location: profileData?.location ?? "",
    company: profileData?.company ?? "",
    website: profileData?.website ?? "",
    github: profileData?.github ?? "",
    linkedin: profileData?.linkedin ?? "",
    bio: profileData?.bio ?? "",
  })
  const handleSave = () => {
    onSave?.(form)
    setSuccessOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={form.title} onChange={(e) => handleChange("title", e.target.value)} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={form.location} onChange={(e) => handleChange("location", e.target.value)} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={form.company} onChange={(e) => handleChange("company", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" value={form.website} onChange={(e) => handleChange("website", e.target.value)} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input id="github" value={form.github} onChange={(e) => handleChange("github", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" value={form.linkedin} onChange={(e) => handleChange("linkedin", e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" value={form.bio} onChange={(e) => handleChange("bio", e.target.value)} />
          </div>
        </CardContent>
      </Card>

      {/* Learning Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Preferences</CardTitle>
          <CardDescription>Customize how the AI tutor interacts with you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="teachingStyle">Teaching Style</Label>
            <Select value={teachingStyle} onValueChange={setTeachingStyle}>
              <SelectTrigger id="teachingStyle">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friendly">Friendly - Encouraging and supportive</SelectItem>
                <SelectItem value="strict">Strict - Rigorous and demanding</SelectItem>
                <SelectItem value="lenient">Lenient - Flexible and patient</SelectItem>
                <SelectItem value="challenging">Challenging - Advanced problems</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Difficulty Level</Label>
            <div className="pt-2">
              <Slider value={difficulty} onValueChange={setDifficulty} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dailyGoal">Daily Learning Goal (minutes)</Label>
            <Select value={dailyGoal} onValueChange={setDailyGoal}>
              <SelectTrigger id="dailyGoal">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 hour</SelectItem>
                <SelectItem value="120">2 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Learning Reminders</Label>
              <p className="text-sm text-muted-foreground">Get daily reminders to continue your learning</p>
            </div>
            <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="achievements">Achievement Notifications</Label>
              <p className="text-sm text-muted-foreground">Get notified when you earn new achievements</p>
            </div>
            <Switch id="achievements" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="progress">Progress Updates</Label>
              <p className="text-sm text-muted-foreground">Weekly summary of your learning progress</p>
            </div>
            <Switch id="progress" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      {/* Success Modal */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile updated</DialogTitle>
          </DialogHeader>
          <p>Your profile information has been saved successfully.</p>
          <div className="flex justify-end pt-4">
            <Button onClick={() => setSuccessOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
