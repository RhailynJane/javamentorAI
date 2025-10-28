import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Flame, Zap, Award, Star, Code } from "lucide-react"

const achievements = [
  { name: "First Steps", icon: Star, earned: true, description: "Complete your first lesson" },
  { name: "Quick Learner", icon: Zap, earned: true, description: "Complete 3 lessons in one day" },
  { name: "Streak Master", icon: Flame, earned: true, description: "Maintain a 7-day streak" },
  { name: "Quiz Champion", icon: Trophy, earned: true, description: "Score 100% on a quiz" },
  { name: "Code Warrior", icon: Code, earned: false, description: "Solve 50 coding challenges" },
  { name: "Java Expert", icon: Award, earned: false, description: "Complete all lessons" },
]

export function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.name}
                className={`p-3 rounded-lg border ${
                  achievement.earned ? "border-primary/50 bg-primary/5" : "border-border bg-muted/30 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`size-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      achievement.earned ? "bg-primary/20" : "bg-muted"
                    }`}
                  >
                    <Icon className={`size-5 ${achievement.earned ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">{achievement.name}</p>
                      {achievement.earned && (
                        <Badge variant="secondary" className="text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
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
