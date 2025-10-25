"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen, Sparkles, User } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    setIsLoggedIn(!!token)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsLoggedIn(false)
    setProfileMenuOpen(false)
    window.location.reload()
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50 shadow-lg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 top-0 left-1/4 animate-float" />
        <div
          className="floating-shape w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 top-0 right-1/3 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo1.jpg" alt="Adhyan Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Adhyan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {["home", "about", "notes", "team"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 rounded-lg group overflow-hidden"
              >
                <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            <div className="flex items-center space-x-3 ml-6">
              {isLoggedIn ? (
                <div className="relative">
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Button>

                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg py-2 z-50">
                      {/* <Link href="/profile">
                        <Button variant="ghost" className="w-full justify-start px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                          My Profile
                        </Button>
                      </Link> */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover-lift"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white btn-hover hover-lift shadow-lg">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="hover-pulse">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-1">
              {["home", "about", "notes", "team"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition-all duration-300 rounded-lg mx-2"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <div className="px-4 py-2 space-y-2">
                {isLoggedIn ? (
                  <>
                    {/* <Link href="/profile" className="block">
                      <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                        My Profile
                      </Button>
                    </Link> */}
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-500 hover:bg-red-50 dark:hover:bg-red-900"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" className="block">
                      <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white btn-hover">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
