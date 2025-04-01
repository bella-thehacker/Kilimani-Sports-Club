"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa"

export default function UserSignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store user data in localStorage (in a real app, this would be a server API call)
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        createdAt: new Date().toISOString(),
      }

      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")

      // Check if email already exists
      if (existingUsers.some((user) => user.email === formData.email)) {
        setError("An account with this email already exists")
        setIsLoading(false)
        return
      }

      // Add new user and save back to localStorage
      existingUsers.push(newUser)
      localStorage.setItem("users", JSON.stringify(existingUsers))

      // Show success message
      setSuccess(true)

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
      })

      // Redirect to login after a delay
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } catch (err) {
      setError("An error occurred during registration. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 order-2 md:order-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-amber-900 mb-2">Registration Form</h1>
            <p className="text-amber-700">Join our sports club community</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">{error}</div>
          )}

          {success && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
              Registration successful! Redirecting to login page...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-amber-900">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-amber-900">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="username" className="block text-sm font-medium text-amber-900">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-amber-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-amber-900">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-amber-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="gender" className="block text-sm font-medium text-amber-900">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-amber-900">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-amber-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-amber-900">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-amber-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="w-full pl-10 pr-3 py-2 border-b-2 border-amber-200 focus:border-amber-600 bg-transparent outline-none text-amber-900"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading || success}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors duration-200 ${
                  isLoading ? "bg-amber-400" : success ? "bg-green-600" : "bg-amber-700 hover:bg-amber-800"
                }`}
              >
                {isLoading ? "Registering..." : success ? "Registration Successful!" : "Register"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-amber-700">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="font-medium text-amber-600 hover:text-amber-800">
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="w-full md:w-1/2 bg-amber-700 relative order-1 md:order-2">
          <img
            src="/basket.avif"
            alt="Sports activities"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-center max-w-xs">
              Become a member today and gain access to world-class facilities, expert coaching, and a vibrant community
              of sports enthusiasts.
            </p>
            <div className="mt-8">
              <div className="flex space-x-2 justify-center">
                <span className="w-3 h-3 rounded-full bg-amber-200"></span>
                <span className="w-3 h-3 rounded-full bg-amber-300"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

