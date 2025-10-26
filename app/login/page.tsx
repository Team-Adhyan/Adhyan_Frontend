// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Eye, EyeOff, BookOpen, ArrowLeft } from "lucide-react"

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")
//   const router = useRouter()

//   // Redirect if already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("authToken")
//     if (token) {
//       router.replace("/") // redirect to homepage
//     }
//   }, [router])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       })

//       const data = await res.json()
//       if (!res.ok) throw new Error(data.message || "Login failed")

//       if (data.token) localStorage.setItem("authToken", data.token)

//       router.push("/") // redirect after successful login
//     } catch (err: any) {
//       setError(err.message || "An unexpected error occurred")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
//       {/* Background circles */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
//       </div>

//       <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
//         <div className="w-full max-w-md">
//           <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group">
//             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//             Back to Home
//           </Link>

//           <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl animate-fade-in-up">
//             <CardHeader className="text-center space-y-4">
//               <div className="flex justify-center">
//                 <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 animate-pulse-glow">
//                   <BookOpen className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 Welcome Back to Adhyan
//               </CardTitle>
//               <CardDescription className="text-gray-300">Sign in to continue your learning journey</CardDescription>
//             </CardHeader>

//             <CardContent className="space-y-6">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {error && (
//                   <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">{error}</div>
//                 )}

//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-white/90">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15"
//                     required
//                     disabled={loading}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="password" className="text-white/90">Password</Label>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15 pr-10"
//                       required
//                       disabled={loading}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//                       disabled={loading}
//                     >
//                       {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between text-sm">
//                   <label className="flex items-center space-x-2 text-gray-300">
//                     <input type="checkbox" className="rounded border-white/20 bg-white/10" />
//                     <span>Remember me</span>
//                   </label>
//                   <Link href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Forgot password?</Link>
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                 >
//                   {loading ? "Signing In..." : "Sign In"}
//                 </Button>
//               </form>

//               <div className="text-center">
//                 <p className="text-gray-300">
//                   Don't have an account?{" "}
//                   <Link href="/signup" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors hover:underline">
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }
 
"use client"

import type React from "react"
// [UPDATED] Import Suspense
import { useState, useEffect, Suspense } from "react" 
// [UPDATED] Import useSearchParams
import { useRouter, useSearchParams } from "next/navigation" 
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, BookOpen, ArrowLeft } from "lucide-react"

// [UPDATED] We must wrap the component in Suspense for useSearchParams to work
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900">Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}

// [UPDATED] All logic is moved into this new child component
function LoginContent() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  
  // [UPDATED] Hooks to read the query parameter
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect") || "/"

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      router.replace(redirectUrl) // [UPDATED] Use the redirect URL
    }
  }, [router, redirectUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Login failed")

      if (data.token) localStorage.setItem("authToken", data.token)

      // [UPDATED] Redirect to the intended page, not just "/"
      router.push(redirectUrl)
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
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
                <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 animate-pulse-glow">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome Back to Adhyan
              </CardTitle>
              <CardDescription className="text-gray-300">Sign in to continue your learning journey</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">{error}</div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400/20 transition-all hover:bg-white/15"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/90">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="rounded border-white/20 bg-white/10" />
                    <span>Remember me</span>
                  </label>
                  <Link href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Forgot password?</Link>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-gray-300">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-teal-400 hover:text-teal-300 font-semibold transition-colors hover:underline">
                    Sign up
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
