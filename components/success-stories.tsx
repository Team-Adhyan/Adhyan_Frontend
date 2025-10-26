"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Linkedin } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      name: "Lucky Faujdar",
      achievement: "Member since Jan 2025",
      story:
        "I'm really grateful to the Adhyan Community.They are quick to respond, supportive, guide juniors well, and always clear doubts in evry possible way with positivity. Its truly a great place for learning and growing.",
      rating: 5,
      linkedin: "https://linkedin.com/in/lucky-faujdar-21262826b",
    },
    {
      name: "Harshit Khare",
      achievement: "Python Student since Feb 2025",
      story:
        "Adhyan's python sessions really helped me strengthen my fundamentals and clear concepts in a simple way/ The well structured study materials, interactive guidance made learning python easier and boosted by confidence. Along with this, the organised resources and consistent support motivated me to keep improving and made my preparation much more effective.",
      rating: 5,
      linkedin: "https://linkedin.com/in/harshitkhare4",
    },
    {
      name: "Shruti Patel",
      achievement: "Member since Mar 2025",
      story:
        "Adhyan's basic mechanical engineering notes were incredibly detailed and well-structured. They played a crucial role in my RGPV preparation and success.",
      rating: 5,
      linkedin: "https://linkedin.com/in/shrutipatel1518",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 top-10 left-10 animate-float" />
        <div
          className="floating-shape w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 bottom-20 right-20 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our students who have achieved their academic goals with Adhyan's support and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-lg" />

              <CardContent className="relative pt-6 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Quote className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-2 hover-rotate" />
                    <div className="flex">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current hover-pulse" />
                      ))}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover-lift"
                    onClick={() => window.open(story.linkedin, "_blank")}
                  >
                    <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 hover-bounce" />
                  </Button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">"{story.story}"</p>

                <div className="border-t border-gray-200 dark:border-slate-600 pt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{story.name}</h4>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">{story.achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
