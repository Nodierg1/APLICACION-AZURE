// Placeholder to host a component
import React from "react";
import styled from "styled-components";

const HoursWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const HoursTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const HoursText = styled.p`
  font-size: 1.2em;
  color: #555;
  margin: 0;
`;

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "9:00", close: "20:00" },
        { day: "Sunday", open: "9:00", close: "20:00" },
    ];

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todayHours = shelterHours.find((day) => day.day === today);

    return (
        <HoursWrapper id="hours">
            <HoursTitle>Today's Hours</HoursTitle>
            <HoursText>{todayHours.day}: {todayHours.open} - {todayHours.close}</HoursText>
        </HoursWrapper>
    );
};

export default Hours;
