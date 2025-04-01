"use client"

import { useState, useEffect } from "react"
import { getEvents } from "../api/events"

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true)
      try {
        const fetchedEvents = await getEvents()
        setEvents(fetchedEvents)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Helpers to determine the days in the current month and the starting day of the week
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getEventsForDay = (day) => {
    const date = new Date(year, month, day)
    return events.filter((event) => {
      // Append 'T00:00:00' to force local interpretation
      const eventDate = new Date(event.date + "T00:00:00")
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      )
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
      <div className="p-6">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-amber-900">
              {monthNames[month]} {year}
            </h2>
            {isLoading && <div className="ml-4 text-amber-600 text-sm">Loading events...</div>}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 transition-colors duration-200"
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-3 py-1 rounded-md bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium transition-colors duration-200"
            >
              Today
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 transition-colors duration-200"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Day Names Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center py-2 font-semibold text-amber-800 bg-amber-50 rounded-md">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-24 md:h-28 bg-amber-50/50 rounded-md"></div>
          ))}

          {/* Days in the current month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const dayEvents = getEventsForDay(day)
            const isToday =
              new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year

            return (
              <div
                key={`day-${day}`}
                className={`h-24 md:h-28 p-1 rounded-md border transition-all duration-200 overflow-hidden ${
                  isToday
                    ? "border-amber-600 bg-amber-100 shadow-sm"
                    : "border-amber-100 hover:border-amber-300 hover:bg-amber-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={`font-bold text-sm rounded-full w-6 h-6 flex items-center justify-center ${
                      isToday ? "bg-amber-700 text-white" : "text-amber-900"
                    }`}
                  >
                    {day}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="text-xs bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {dayEvents.length}
                    </span>
                  )}
                </div>
                <div className="mt-1 space-y-1 overflow-hidden">
                  {dayEvents.slice(0, 2).map((event, i) => (
                    <div
                      key={i}
                      className="text-xs truncate bg-amber-200 text-amber-800 px-1 py-0.5 rounded"
                      title={event.title}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-amber-600 font-medium">+{dayEvents.length - 2} more</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-amber-50 px-6 py-3 border-t border-amber-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-amber-800">
            <span className="font-semibold">Total Events:</span> {events.length}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-700 mr-2"></div>
              <span className="text-xs text-amber-800">Today</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-200 mr-2"></div>
              <span className="text-xs text-amber-800">Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

