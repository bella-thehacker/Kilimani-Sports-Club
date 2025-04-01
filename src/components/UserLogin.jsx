"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaEnvelope, FaLock } from "react-icons/fa"

export default function UserLogin({ setIsAuthenticated }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Check if we have stored user data from signup
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const user = storedUsers.find((u) => u.email === email)

      // For demo purposes, also allow the hardcoded test account
      if ((user && user.password === password) || (email === "test@example.com" && password === "password")) {
        localStorage.setItem("userToken", "dummyToken123")
        setIsAuthenticated(true)
        navigate("/")
      } else {
        setError("Invalid email or password. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel - Image */}
        <div className="w-full md:w-1/2 bg-amber-800 relative">
          <img
            src="/team-pic.jpg"
            alt="Sports club members"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
            <p className="text-center max-w-xs">
              Login to access your membership benefits, book facilities, and join exclusive events.
            </p>
            <div className="mt-8 flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-amber-200"></span>
              <span className="w-3 h-3 rounded-full bg-amber-300"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-900 mb-2">Login</h1>
            <p className="text-amber-700">Please enter your credentials to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-amber-900">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-amber-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-amber-900">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-amber-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-amber-600 hover:text-amber-800">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors duration-200 ${
                isLoading ? "bg-amber-400" : "bg-amber-700 hover:bg-amber-800"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-amber-700">
              Don't have an account?{" "}
              <button onClick={() => navigate("/signup")} className="font-medium text-amber-600 hover:text-amber-800">
                Sign up
              </button>
            </p>
          </div>

          {/* Demo credentials helper */}
          <div className="mt-6 p-3 bg-amber-50 border border-amber-100 rounded-md">
            <p className="text-sm text-amber-800 font-medium">Demo Credentials:</p>
            <p className="text-xs text-amber-700">Email: test@example.com</p>
            <p className="text-xs text-amber-700">Password: password</p>
          </div>
        </div>
      </div>
    </div>
  )
}

