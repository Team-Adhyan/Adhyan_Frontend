"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function NotesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".subject-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const subjects = [
    {
      name: "RGPV",
      topics: ["Engineering", "Syllabus", "Previous Papers", "Lab Manuals"],
      color: "bg-gradient-to-r from-teal-500 to-teal-600",
      icon: "🎓",
      slug: "rgpv",
    },
    {
      name: "GATE",
      topics: ["Preparation", "Mock Tests", "Previous Years", "Study Plan"],
      color: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      icon: "🚪",
      slug: "gate",
    },
    {
      name: "Python",
      topics: ["Basics", "Data Structures", "Web Development", "Machine Learning"],
      color: "bg-gradient-to-r from-cyan-500 to-cyan-600",
      icon: "🐍",
      slug: "python",
    },
    {
      name: "WEB DEVELOPMENT",
      topics: ["HTML & CSS", "JS", "React.js", "Node.js"],
      color: "bg-gradient-to-r from-teal-500 to-emerald-600",
      icon: "⚛️",
      slug: "mern",
    },
    {
      name: "JAVA",
      topics: ["Core Java", "Spring Boot", "Hibernate", "Microservices"],
      color: "bg-gradient-to-r from-emerald-500 to-teal-600",
      icon: "☕",
      slug: "java",
    },
    {
      name: "DSA",
      topics: ["Arrays", "Linked Lists", "Trees", "Algorithms"],
      color: "bg-gradient-to-r from-cyan-500 to-teal-600",
      icon: "🔢",
      slug: "dsa",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="notes"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent mb-4">
            Study Notes & Resources
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Access comprehensive notes across various subjects, carefully curated and organized for effective learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="subject-card opacity-0 hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:border-teal-400/50 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-full ${subject.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {subject.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-teal-200 transition-colors">
                    {subject.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-2">Topics covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {subject.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-white/10 text-gray-200 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">
                    <BookOpen className="inline h-4 w-4 mr-1" />
                    Study materials available
                  </span>
                </div>

                <Link href={`/notes/${subject.slug}`}>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0 transition-all duration-300"
                  >
                    <BookOpen className="h-4 w-4 mr-1" />
                    Access Materials
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
