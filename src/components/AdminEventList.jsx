// src/components/AdminEventList.jsx
import React, { useState } from "react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Badge as MuiBadge,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteEvent } from "../api/events";
import { AdminEventEditForm } from "./AdminEventEditForm";
import { toast } from "./ui/use-toast";

export function AdminEventList({ events, onEventsChanged }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [eventToEdit, setEventToEdit] = useState(null);

  // Sort events by date (newest first)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleDeleteClick = (id) => {
    setEventToDelete(id);
  };

  const handleEditClick = (event) => {
    setEventToEdit(event);
  };

  const confirmDelete = async () => {
    if (!eventToDelete) return;
    setIsDeleting(true);
    try {
      await deleteEvent(eventToDelete);
      toast({
        title: "Event deleted",
        description: "The event has been successfully removed.",
      });
      onEventsChanged && onEventsChanged();
    } catch (error) {
      console.error("Failed to delete event:", error);
      toast({
        title: "Error",
        description: "Failed to delete the event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setEventToDelete(null);
    }
  };

  const cancelDelete = () => {
    setEventToDelete(null);
  };

  const handleEditComplete = () => {
    setEventToEdit(null);
    onEventsChanged && onEventsChanged();
  };

  return (
    <>
      {sortedEvents.length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary" align="center">
              No events found
            </Typography>
          </CardContent>
        </Card>
      ) : (
        sortedEvents.map((event) => (
          <Card key={event.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                {format(new Date(event.date), "MMM d, yyyy")}
              </Typography>
              <Typography variant="h6">{event.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {event.location}
              </Typography>
              <MuiBadge
                color="primary"
                badgeContent={event.type}
                sx={{ mt: 1 }}
              />
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleEditClick(event)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(event.id)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={Boolean(eventToDelete)} onClose={cancelDelete}>
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this event? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} disabled={isDeleting}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Event Dialog */}
      <Dialog
        open={Boolean(eventToEdit)}
        onClose={() => setEventToEdit(null)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Event</DialogTitle>
        <DialogContent>
          {eventToEdit && (
            <AdminEventEditForm event={eventToEdit} onComplete={handleEditComplete} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
