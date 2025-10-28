"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"

export function SettingsForm() {
  const { toast } = useToast()
  const [teachingStyle, setTeachingStyle] = useState("friendly")
  const [difficulty, setDifficulty] = useState([50])
  const [notifications, setNotifications] = useState(true)
  const [dailyGoal, setDailyGoal] = useState("30")

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    })
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
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Alex" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Johnson" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" defaultValue="San Francisco, CA" />
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
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}
