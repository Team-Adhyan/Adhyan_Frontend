"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"

export default function ProfileMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) setIsLoggedIn(true)
  }, [])

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsLoggedIn(false)
    setShowDropdown(false)
    router.push("/login") // redirect to login
  }

  // Don't show the menu if user is not logged in
  if (!isLoggedIn) return null

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors"
      >
        <User className="w-6 h-6 text-white" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-20">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
