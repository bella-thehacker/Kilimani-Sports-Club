// src/components/AdminEventForm.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
} from "@mui/material";
import { createEvent } from "../api/events";
import { toast } from "./ui/use-toast";

export function AdminEventForm({ onEventAdded }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");

  const eventTypes = ["Training", "Match", "Tournament", "Meeting", "Social", "Other"];

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const time = formData.get("time");
    const location = formData.get("location");

    if (!title || !date || !time || !eventType) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await createEvent({
        title,
        description,
        date,
        time,
        location,
        type: eventType,
      });
      toast({
        title: "Event created",
        description: "Your event has been successfully added to the calendar.",
      });
      e.target.reset();
      setDate("");
      setEventType("");
      onEventAdded && onEventAdded();
    } catch (error) {
      console.error("Failed to create event:", error);
      toast({
        title: "Error",
        description: "Failed to create the event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Event Title *" name="title" fullWidth margin="normal" required />
      <TextField
        label="Description"
        name="description"
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />
      <TextField
        label="Date *"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="Time *"
        name="time"
        fullWidth
        margin="normal"
        placeholder="e.g. 3:00 PM - 5:00 PM"
        required
      />
      <TextField label="Location" name="location" fullWidth margin="normal" />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="event-type-label">Event Type *</InputLabel>
        <Select
          labelId="event-type-label"
          value={eventType}
          label="Event Type *"
          onChange={(e) => setEventType(e.target.value)}
        >
          {eventTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DialogActions>
        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Adding Event..." : "Add Event"}
        </Button>
      </DialogActions>
    </form>
  );
}
