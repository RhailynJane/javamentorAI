import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Target, Award, Zap } from "lucide-react"

export function ProfileStats() {
  const stats = [
    { label: "Lessons Completed", value: "4/10", icon: Trophy, color: "text-primary" },
    { label: "Quiz Score Average", value: "87%", icon: Target, color: "text-accent" },
    { label: "Achievements Earned", value: "8", icon: Award, color: "text-primary" },
    { label: "Current Streak", value: "12 days", icon: Zap, color: "text-accent" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className={`size-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
