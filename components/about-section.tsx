"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, BookOpen, Award } from "lucide-react"
import { useEffect, useRef } from "react"

export function AboutSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".about-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Adhyan is a comprehensive educational platform dedicated to providing high-quality learning resources and
            fostering academic excellence among students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="about-card opacity-0 text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-teal-200 group">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                Our Mission
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                To make quality education accessible to every student through innovative learning solutions.
              </p>
            </CardContent>
          </Card>

          <Card
            className="about-card opacity-0 text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-cyan-200 group"
            style={{ animationDelay: "200ms" }}
          >
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                Community
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Building a supportive community of learners, educators, and academic achievers.
              </p>
            </CardContent>
          </Card>

          <Card
            className="about-card opacity-0 text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-teal-200 group"
            style={{ animationDelay: "400ms" }}
          >
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                Resources
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Comprehensive study materials, notes, and resources across multiple subjects.
              </p>
            </CardContent>
          </Card>

          <Card
            className="about-card opacity-0 text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-emerald-200 group"
            style={{ animationDelay: "600ms" }}
          >
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                Excellence
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Committed to maintaining the highest standards in educational content and delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
