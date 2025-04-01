"use client"

import { useState } from "react"
import { Calendar } from "./Calendar"
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaTrophy } from "react-icons/fa"

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Sample featured events data
  const featuredEvents = [
    {
      id: 1,
      title: "Annual Tennis Tournament",
      date: "July 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Tennis Courts",
      image: "/tennis-court.jpg",
      description:
        "Join us for our prestigious annual tennis tournament featuring players from all skill levels. Compete for prizes and recognition in this exciting three-day event.",
      category: "Competition",
    },
    {
      id: 2,
      title: "Summer Swimming Camp",
      date: "August 1-14, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Olympic Pool",
      image: "/swim.jpg",
      description:
        "Two weeks of intensive swimming training for children ages 8-16. Professional coaches will help improve technique, endurance, and confidence in the water.",
      category: "Training",
    },
    {
      id: 3,
      title: "Fitness Challenge Weekend",
      date: "July 29-30, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Main Gym",
      image: "/fitness.jpg",
      description:
        "Test your limits in our weekend fitness challenge. Multiple events designed to push your strength, endurance, and mental toughness.",
      category: "Challenge",
    },
  ]

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 4,
      title: "Basketball Skills Workshop",
      date: "July 8, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Basketball Courts",
      category: "Workshop",
    },
    {
      id: 5,
      title: "Yoga for Athletes",
      date: "July 10, 2024",
      time: "7:00 AM - 8:30 AM",
      location: "Studio 2",
      category: "Wellness",
    },
    {
      id: 6,
      title: "Junior Football League",
      date: "July 12, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Football Fields",
      category: "Youth",
    },
    {
      id: 7,
      title: "Nutrition Seminar",
      date: "July 14, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Conference Room",
      category: "Education",
    },
    {
      id: 8,
      title: "Squash Tournament",
      date: "July 18, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Squash Courts",
      category: "Competition",
    },
  ]

  // Event categories
  const categories = [
    { name: "All Events", icon: <FaCalendarAlt /> },
    { name: "Competitions", icon: <FaTrophy /> },
    { name: "Training", icon: <FaUsers /> },
    { name: "Workshops", icon: <FaClock /> },
  ]

  return (
    <main className="w-full bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amber-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/trophy.jpg"
            alt="Sports event"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20">Club Events & Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join us for exciting competitions, training sessions, and community gatherings throughout the year.
          </p>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-amber-700 text-white py-1 px-3 rounded-bl-lg">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-amber-700 mb-1">
                  <FaCalendarAlt className="mr-2" size={14} />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-amber-700 mb-1">
                  <FaClock className="mr-2" size={14} />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-amber-700 mb-3">
                  <FaMapMarkerAlt className="mr-2" size={14} />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-amber-900 text-sm mb-4">{event.description}</p>
                <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded-md transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-xl shadow-md mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Events Calendar</h2>
          <p className="text-amber-700">View and plan your activities with our interactive calendar</p>
        </div>
        <Calendar />
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 md:mb-0">Upcoming Events</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="divide-y divide-amber-100">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-6 hover:bg-amber-50 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold text-amber-900">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-4 mt-2">
                      <div className="flex items-center text-amber-700">
                        <FaCalendarAlt className="mr-2" size={14} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-amber-700">
                        <FaClock className="mr-2" size={14} />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-amber-700">
                        <FaMapMarkerAlt className="mr-2" size={14} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs mr-4">
                      {event.category}
                    </span>
                    <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Host Your Own Event</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Looking to organize a tournament, training session, or private event? Our facilities are available for
            booking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold py-3 px-8 rounded-md transition-colors duration-300">
              View Pricing
            </button>
            <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Event Registration Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Event Registration Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">How to Register</h3>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    1
                  </span>
                  <span>Create an account or log in to your existing account</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    2
                  </span>
                  <span>Browse events and select the one you wish to join</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    3
                  </span>
                  <span>Click the "Register" button and complete the registration form</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    4
                  </span>
                  <span>Make any required payments</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    5
                  </span>
                  <span>Receive confirmation email with event details</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Policies</h3>
              <div className="space-y-4 text-amber-800">
                <p>
                  <span className="font-semibold">Cancellations:</span> Full refund available up to 48 hours before the
                  event. 50% refund available up to 24 hours before the event.
                </p>
                <p>
                  <span className="font-semibold">Age Requirements:</span> Different events have different age
                  requirements. Please check the specific event details.
                </p>
                <p>
                  <span className="font-semibold">Equipment:</span> Some events require participants to bring their own
                  equipment. Details will be provided in the event description.
                </p>
                <p>
                  <span className="font-semibold">Weather Policy:</span> Outdoor events may be rescheduled due to
                  inclement weather. Participants will be notified via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

