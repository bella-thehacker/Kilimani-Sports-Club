// src/components/AdminEventEditForm.jsx
import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, DialogActions } from "@mui/material";
import { updateEvent } from "../api/events";
import { toast } from "./ui/use-toast";

export function AdminEventEditForm({ event, onComplete }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState(event.date); // date as "YYYY-MM-DD"
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [time, setTime] = useState(event.time);
  const [location, setLocation] = useState(event.location);
  const [type, setType] = useState(event.type);

  const eventTypes = ["Training", "Match", "Tournament", "Meeting", "Social", "Other"];

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !date || !time || !type) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await updateEvent(event.id, {
        title,
        description,
        date,
        time,
        location,
        type,
      });
      toast({
        title: "Event updated",
        description: "Your event has been successfully updated.",
      });
      onComplete();
    } catch (error) {
      console.error("Failed to update event:", error);
      toast({
        title: "Error",
        description: "Failed to update the event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Event Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        margin="normal"
        placeholder="e.g. 3:00 PM - 5:00 PM"
        required
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="event-type-label">Event Type *</InputLabel>
        <Select
          labelId="event-type-label"
          value={type}
          label="Event Type *"
          onChange={(e) => setType(e.target.value)}
        >
          {eventTypes.map((eventType) => (
            <MenuItem key={eventType} value={eventType}>
              {eventType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DialogActions>
        <Button onClick={onComplete} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </DialogActions>
    </form>
  );
}
