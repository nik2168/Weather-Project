import React from "react";
import "./WeeklyForecast.css";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Cloud } from "@mui/icons-material";

const WeeklyForecast = () => {
  return (
    <Box className="weeklyForecastBox">
      <div className="weeklyForecastHeader">
        <span></span>
        <Typography sx={{ fontWeight: "100", fontSize: "0.8rem" }}>
          Weekly Forecast
        </Typography>
      </div>
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        sx={{ backgroundColor: "grey", height: "0.1px" }}
      />

      <Stack
        direction={{xs: "column", sm: "column", md: "row"}}
        spacing={{ xs: 2}}
        className="weeklyForecastStack"
      >
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <Cloud sx={{ height: "2.3rem", width: "2.3rem" }} />
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <Cloud sx={{ height: "2.3rem", width: "2.3rem" }} />
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="44px"
            fill="yellow"
          >
            <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
          </svg>{" "}
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="44px"
            fill="#e8eaed"
          >
            <path d="M240-200q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm480 0q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200ZM360-40q-17 0-28.5-11.5T320-80q0-17 11.5-28.5T360-120q17 0 28.5 11.5T400-80q0 17-11.5 28.5T360-40Zm120-160q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200ZM600-40q-17 0-28.5-11.5T560-80q0-17 11.5-28.5T600-120q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40ZM300-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z" />
          </svg>{" "}
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="44px"
            fill="aliceblue"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
          </svg>{" "}
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <Cloud sx={{ height: "2.3rem", width: "2.3rem" }} />
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            12 AM
          </Typography>
          <Cloud sx={{ height: "2.3rem", width: "2.3rem" }} />
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            13°
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default WeeklyForecast;
