// src/components/EventList.jsx
import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Skeleton, Grid, Badge as MuiBadge } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { format } from "date-fns";
import { getEvents } from "../api/events";

export function EventList() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const fetchedEvents = await getEvents();
        // Sort events by date (upcoming first)
        const sortedEvents = fetchedEvents.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        // Filter to only show future events
        const upcomingEvents = sortedEvents.filter(
          (event) =>
            new Date(event.date) >= new Date(new Date().setHours(0, 0, 0, 0))
        );
        setEvents(upcomingEvents);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6">Upcoming Events</Typography>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} style={{ marginBottom: 8 }}>
              <Skeleton variant="text" width="30%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="66%" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Upcoming Events</Typography>
        {events.length === 0 ? (
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ py: 2 }}
          >
            No upcoming events
          </Typography>
        ) : (
          events.slice(0, 5).map((event) => (
            <div
              key={event.id}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #ddd",
                paddingBottom: 8,
              }}
            >
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CalendarToday fontSize="small" color="action" />
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {format(new Date(event.date), "EEEE, MMMM d, yyyy")}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle1">{event.title}</Typography>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <MuiBadge color="primary" badgeContent={event.type} />
                </Grid>
                <Grid item>
                  <Typography variant="body2">{event.time}</Typography>
                </Grid>
              </Grid>
              {event.location && (
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {event.location}
                </Typography>
              )}
            </div>
          ))
        )}
        {events.length > 5 && (
          <Typography variant="body2" color="textSecondary" align="center">
            +{events.length - 5} more events
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
