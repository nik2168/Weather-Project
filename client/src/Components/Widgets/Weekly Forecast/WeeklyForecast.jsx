import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./WeeklyForecast.css";
import { useWeeklyForecastQuery } from "../../../redux/api/api";
import { useErrors } from "../../../Features/hooks";

const WeeklyForecast = () => {
  
  const { city } = useParams();

  // const baseUrl = "api.openweathermap.org/data/2.5/forecast";


    const { isLoading, isError, error, data, refetch } = useWeeklyForecastQuery(city);

    useErrors([{ isError, error }]);

  let list = [];

  // useEffect(() => {
  //   const toastId = toast.loading("Fetching Data...");

  //   setIsLoading(true);

  //   // .get(`${baseUrl}?q=${city}&appid=6cfb46eca0d4f9bd7c6518971820b06f`)

  //   axios
  //     .get(
  //       `http://api.openweathermap.org/data/2.5/forecast?appid=6cfb46eca0d4f9bd7c6518971820b06f&q=${city}&count=7`
  //     )
  //     .then(({ data }) => {
  //       setData(data);
  //       toast.success(data?.message || "success !", { id: toastId });
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       toast.error(err?.response?.data?.message || "Something went wrong", {
  //         id: toastId,
  //       });
  //       setIsLoading(false);
  //     });
  // }, [city]);


  let dailyData = new Map();

  if (!isLoading) {
    list = data?.list;
    list?.map((item) => {
      const dateTime = new Date(item.dt * 1000);
      const day = dateTime.getDate();
      const time = dateTime.getHours();
      // check if dailyData map has it
      // if (!dailyData[day]) dailyData[day] = [];
      dailyData[day] = { ...item, day, time };
    });
  }

      const DataElements = [];


  const renderDailyData = () => {
    

    for (let key in dailyData) {
      let data = dailyData[key];

      const date = new Date(data?.dt * 1000);

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const currentDayOfWeek = daysOfWeek[date.getDay()];
      let curWeather = data?.weather;
      let weather = "";
      let weatherPng = "";
      if (curWeather) {
        weather = curWeather[0]?.main;
        weatherPng = curWeather[0]?.icon;
      }

      DataElements.push(
        <div key={data?.main?.temp}>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "300" }}>
            {currentDayOfWeek.slice(0, 3)}
          </Typography>
          <img
            src={`https://openweathermap.org/img/wn/${weatherPng}@2x.png`}
            alt="png"
            style={{ width: "4rem", height: "4rem" }}
          />
          {/* <Cloud sx={{ height: "2.3rem", width: "2.3rem" }} /> */}
          <Typography sx={{ fontSize: "1rem", fontWeight: "300" }}>
            {Math.trunc(data?.main?.temp - 273.15)}°
          </Typography>
        </div>
     )
    }
  };

  renderDailyData();

  return isLoading ? (
    <Skeleton className="weeklyForecastBox" />
  ) : (
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
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 2 }}
        className="weeklyForecastStack"
      >
        {DataElements.map((ele) => ele)}

       
      </Stack>
    </Box>
  );
};

export default WeeklyForecast;
