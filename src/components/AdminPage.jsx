// src/components/AdminPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AdminEventForm } from "./AdminEventForm";
import { AdminEventList } from "./AdminEventList";
import { getEvents } from "../api/events";

function AdminPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [navigate]);

  const refreshEvents = async () => {
    setLoading(true);
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error("Failed to refresh events:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Event Administration
        </Typography>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Event Administration
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" gutterBottom>
            Add New Event
          </Typography>
          <AdminEventForm onEventAdded={refreshEvents} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" gutterBottom>
            Manage Events
          </Typography>
          <AdminEventList events={events} onEventsChanged={refreshEvents} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminPage;
