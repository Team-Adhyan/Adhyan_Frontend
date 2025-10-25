"use client"
import React, { useState } from "react"
import Image from "next/image"
import { X, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const sessions = [
  {
    id: 1,
    title: "Workshop on Master SQL",
    image: "/workshop.png",
    instructor: "WebDev Mentor",
    description: `🔸 By the end of Day 1, you’ll be confident in creating and managing databases, tables, and basic queries.

    🔸 By the end of Day 2, you’ll be able to write complex queries and understand how relational databases work in real-life systems.

🌟 Workshop Highlights:

 2 Days of Guided Learning
 Detailed Slides (with examples & explanations)
 Hands-on Practice with Live Queries
 Beginner Friendly — No Prior SQL Knowledge Needed

🙌 Join Us and Level Up Your Database Skills!

💬 For any queries, contact Team Adhyan.
📍 See you at the workshop!`,

    meetLink: "https://meet.jit.si/moderated/8679e70320c33babec578c76e941fd1775861bf68d970713b412ccb07fbf6a2a",
    googleform: "https://docs.google.com/forms/d/1Ao1pMjTg6lpidJfX52KaTkQaS3nkGvdFNXJHyvF-sgk/viewform",
    status: "active",
  },
  { id: 2, status: "coming-soon" },
  { id: 3, status: "coming-soon" },
]

export default function WhatsNewPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedSession = sessions.find((s) => s.id === selectedId)
  const router = useRouter()

  const handleSessionClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-white drop-shadow-lg">
          What's New
        </h1>

        {/* Revert/Home icon only on first slide */}
        {selectedId === null && (
          <button
            onClick={() => router.push("/")}
            className="absolute top-6 left-6 z-50 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Expanded session view */}
        {selectedSession && (
          <div className="relative w-full max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl rounded-xl overflow-hidden mb-8 animate-fade-in-up">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative bg-black/20">
                <Image
                  src={selectedSession.image ?? "/workshop.png"}
                  alt={selectedSession.title ?? "Workshop image"}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  {selectedSession.title}
                </h2>
                <p className="text-base md:text-lg text-cyan-300 mb-4">
                  {selectedSession.instructor}
                </p>
                <p className="text-gray-200 mb-8 whitespace-pre-line">{selectedSession.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedSession.meetLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium
                               hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Join Meet
                  </a>
                  <a
                    href={selectedSession.googleform}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto text-center bg-red-600 text-white px-5 py-3 rounded-lg text-sm font-medium
                               hover:bg-red-700 transition-colors shadow-md"
                  >
                    Google Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of session cards */}
        {selectedId === null && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {sessions.map((session) => {
              const isComingSoon = session.status === "coming-soon"

              if (isComingSoon) {
                return (
                  <div
                    key={session.id}
                    className="group relative backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl rounded-xl overflow-hidden opacity-60 cursor-not-allowed"
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-black/20 flex items-center justify-center">
                      <span className="border-2 border-cyan-400 text-cyan-300 font-bold py-2 px-4 rounded-lg shadow-lg text-sm uppercase tracking-wider">
                        Coming Soon
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        New Workshop
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">&nbsp;</p>
                      <div className="text-gray-400 text-sm font-medium">
                        Details to be announced
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={session.id}
                  onClick={() => handleSessionClick(session.id)}
                  className="group relative backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-cyan-500/25 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={session.image ?? "/workshop.png"}
                      alt={session.title ?? "Workshop image"}
                      fill={true}
                      className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {session.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {session.instructor}
                    </p>
                    <div className="text-cyan-300 text-sm font-medium">
                      Click to learn more
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
