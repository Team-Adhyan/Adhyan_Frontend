"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Globe } from "lucide-react"
import { useEffect, useRef } from "react"

export function MotiveSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".motive-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const motives = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description:
        "We are driven by a genuine passion for education and the transformative power of knowledge. Every resource we create comes from our commitment to student success.",
      color: "from-teal-500 to-cyan-500", // Updated to turquoise theme
      bgColor: "bg-teal-500/10",
    },
    {
      icon: Lightbulb,
      title: "Innovation in Education",
      description:
        "We constantly innovate to make learning more engaging, accessible, and effective. Our goal is to revolutionize how students interact with educational content.",
      color: "from-cyan-500 to-blue-500", // Updated to turquoise theme
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our vision extends beyond borders. We aim to create a global community of learners who can access quality education regardless of their geographical location.",
      color: "from-emerald-500 to-teal-500", // Updated to turquoise theme
      bgColor: "bg-emerald-500/10",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent mb-4">
            Our Motive
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We believe education is the foundation of progress. Our motivation stems from the desire to bridge
            educational gaps and create opportunities for every learner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {motives.map((motive, index) => {
            const IconComponent = motive.icon
            return (
              <Card
                key={index}
                className="motive-card opacity-0 text-center p-8 hover:scale-105 transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20 hover:border-teal-400/50 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${motive.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-12 w-12 text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-teal-200 transition-colors">
                    {motive.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {motive.description}
                  </p>
                  <div
                    className={`w-full h-1 ${motive.bgColor} rounded-full mt-6 group-hover:bg-opacity-30 transition-all`}
                  ></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
