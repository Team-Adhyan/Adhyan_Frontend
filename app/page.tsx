import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { MotiveSection } from "@/components/motive-section"
import { SuccessStories } from "@/components/success-stories"
import { NotesSection }  from "@/components/notes-section"
import { PromotionSection } from "@/components/promotion-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <MotiveSection />
        <SuccessStories />
        <NotesSection />
        <PromotionSection />
      </main>
      <Footer />
    </div>
  )
}
