import React, { useEffect, useState } from "react";
import WeatherWidget from "../../Components/WeatherWidget/WeatherWidget";
import "./DashBoard.css";
import { Container, Paper, Skeleton, Stack, Typography, styled } from "@mui/material";
import DashBoardBackground from "../../Components/DashBoardBackground/DashBoardBackground";
import Widgets from "../../Components/Widgets/Widgets";
import AppLayout from "../../Components/AppLayout/AppLayout";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";



const DashBoard = () => {
  const [curData, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);


    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";


  const { city } = useParams();

  useEffect(() => {
    const toastId = toast.loading("Fetching Data...");

    setIsLoading(true);

    axios
      .get(`${baseUrl}?q=${city}&appid=6cfb46eca0d4f9bd7c6518971820b06f`)
      .then(({ data }) => {
        setData(data);
        console.log(data)
        toast.success(data?.message || "success !", { id: toastId });
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Something went wrong", {
          id: toastId,
        });
                setIsLoading(false);
      });
  }, [city]);

  if(!curData) return null;

  let curWeather = curData?.weather
  let weather = ""
  if(curWeather){
   weather = curWeather[0]?.main
  }

  return isLoading ? (
    <Skeleton className="dashboard" />
  ) : (
    <>
      <div className="dashboard">
        <DashBoardBackground />

        <Container sx={{ height: "40%", width: "100%" }}>
          <Stack
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "3rem",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ fontWeight: "300", fontSize: "2.3rem" }}
            >
              {curData?.name}
            </Typography>
            <Typography
              variant="h2"
              textAlign={"center"}
              sx={{ fontSize: "7rem" }}
            >
              {Math.trunc(curData?.main?.temp - 273.15)}°
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ color: "lightgrey", fontSize: "1rem", fontWeight: "700" }}
            >
              {/* {curData?.weather[0]?.main} */}
              {weather}
            </Typography>
            <Typography textAlign={"center"} sx={{ fontWeight: "400" }}>
              H:{Math.trunc(curData?.main?.temp_max - 273.15)}° &nbsp;&nbsp; L:
              {Math.trunc(curData?.main?.temp_min - 273.15)}°
            </Typography>
          </Stack>
        </Container>
        <Widgets curData={curData} />
      </div>
    </>
  );
};

export default AppLayout()(DashBoard);
