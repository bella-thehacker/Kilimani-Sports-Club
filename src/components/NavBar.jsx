"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [showNavLinks, setShowNavLinks] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingDown = currentScrollPos > prevScrollPos

      setScrolled(currentScrollPos > 20)

      if (isScrollingDown && currentScrollPos > 50) {
        setShowNavLinks(false) // Hide navbar when scrolling down
      } else {
        setShowNavLinks(true) // Show navbar when scrolling up
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Membership", path: "/membership" },
    { name: "Events", path: "/events" },
    { name: "Facilities", path: "/facilities" },
    { name: "Restaurant", path: "/rest" },
    { name: "Staff", path: "/staff" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-500 ease-in-out">
      {/* Logo */}
      <div
        className={`w-full flex justify-center transition-all duration-500 ease-in-out ${
          scrolled ? "bg-amber-900/90 backdrop-blur-sm" : "bg-amber-900"
        }`}
      >
        <NavLink to="/" className="py-2">
          <img
            src="/transparent.png"
            alt="Kilimani Sports Club"
            className="h-16 w-16 object-contain transition-all duration-500 ease-in-out"
          />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled ? "bg-amber-900/90 backdrop-blur-sm" : "bg-amber-900"
        } ${showNavLinks ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-8 text-white py-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-amber-200 transition-colors py-1 px-1 inline-block text-sm md:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-200 after:transition-all after:duration-300 ${
                      isActive ? "font-medium after:w-full" : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
