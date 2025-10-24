"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Users, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import{TypeAnimation} from "react-type-animation";

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToNotes = () => {
    const element = document.getElementById("notes")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-500/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-600/20 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-60 right-1/3 w-8 h-8 bg-cyan-400/20 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 ${mounted ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          >
            <div className="relative">
              <GraduationCap className="h-20 w-20 text-teal-400 animate-pulse" />
              <div className="absolute -inset-2 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <span className="text-white">
               <TypeAnimation sequence={[400,'Welcome to ',1000]} wrapper="span" cursor={false} speed={1} />
            </span>
            <span className="text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text animate-pulse">
              <TypeAnimation sequence={[1500,'Adhyan']} wrapper="span" cursor={false} speed={1} />
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Empowering students with quality education and comprehensive learning resources
          </p>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <BookOpen className="h-8 w-8 text-teal-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-gray-300 text-sm">Study Materials</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <Users className="h-8 w-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Students Helped</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <Trophy className="h-8 w-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              onClick={scrollToNotes}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 group border-0"
            >
              Explore Notes
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
