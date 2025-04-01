// This file simulates API calls to a backend server
// In a real application, these would be actual API calls to your server

// For this example, we'll use localStorage to persist data
const STORAGE_KEY = "sports_club_events"

// Initialize with some sample data if empty
const initializeEvents = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const sampleEvents = [
      {
        id: "1",
        title: "Annual Club Tournament",
        description: "Our biggest tournament of the year with prizes for winners.",
        date: "2025-04-15",
        time: "9:00 AM - 5:00 PM",
        location: "Main Sports Complex",
        type: "Tournament",
      },
      {
        id: "2",
        title: "Weekly Training Session",
        description: "Regular training session for all members.",
        date: "2025-04-05",
        time: "6:00 PM - 8:00 PM",
        location: "Training Field B",
        type: "Training",
      },
      {
        id: "3",
        title: "Friendly Match",
        description: "Friendly match against neighboring club.",
        date: "2025-04-10",
        time: "3:00 PM - 5:00 PM",
        location: "Away Field",
        type: "Match",
      },
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEvents))
  }
}

// Get all events
export const getEvents = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  initializeEvents()
  const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  return events
}

// Get a single event by ID
export const getEvent = async (id) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  initializeEvents()
  const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  return events.find((event) => event.id === id) || null
}

// Create a new event
export const createEvent = async (eventData) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  initializeEvents()
  const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")

  const newEvent = {
    ...eventData,
    id: Date.now().toString(),
  }

  events.push(newEvent)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events))

  return newEvent
}

// Update an existing event
export const updateEvent = async (id, eventData) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  initializeEvents()
  const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  const eventIndex = events.findIndex((event) => event.id === id)

  if (eventIndex === -1) {
    throw new Error("Event not found")
  }

  const updatedEvent = {
    ...events[eventIndex],
    ...eventData,
  }

  events[eventIndex] = updatedEvent
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events))

  return updatedEvent
}

// Delete an event
export const deleteEvent = async (id) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 600))

  initializeEvents()
  const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  const filteredEvents = events.filter((event) => event.id !== id)

  if (filteredEvents.length === events.length) {
    throw new Error("Event not found")
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredEvents))
  return true
}

