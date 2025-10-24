"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, BookOpen, ArrowLeft, User, Mail, Lock } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) router.replace("/") // redirect to homepage
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Signup failed")

      setSuccess("Account created successfully! Redirecting to login...")
      setFormData({ name: "", email: "", password: "", confirmPassword: "" })

      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl animate-fade-in-up">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-pulse-glow">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join Adhyan Today
              </CardTitle>
              <CardDescription className="text-gray-300">Create your account and start learning</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">{error}</div>}
                {success && <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">{success}</div>}

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/90 flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/90 flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15 pr-10"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      disabled={loading}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white/90 flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15 pr-10"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      disabled={loading}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10 mt-1" required />
                  <span className="text-gray-300">
                    I agree to the{" "}
                    <Link href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Terms of Service</Link> and{" "}
                    <Link href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Privacy Policy</Link>
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-gray-300">
                  Already have an account?{" "}
                  <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
