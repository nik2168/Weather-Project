import {
  Skeleton,
  Typography
} from "@mui/material";
import React from 'react';
import './HomeCities.css';
import { Link } from "react-router-dom";
import { useCurWeatherQuery } from "../../redux/api/api";
import { useErrors } from "../../Features/hooks";
import { changeTimeFormat } from "../../Features/helper";
import clouds from '../../assets/Videos/clouds.mp4'
import clouds2 from '../../assets/Videos/clouds2.mp4'
import snowfall from '../../assets/Videos/snowfall.mp4'
import mountain from '../../assets/Videos/mountain.mp4'
import nightlight from '../../assets/Videos/nightlight.mp4'
import sea from '../../assets/Videos/sea.mp4'
import northenlights from "../../assets/Videos/northenlights.mp4";

const HomeCities = ({curCity, idx}) => {

  useCurWeatherQuery()


  const { isLoading, isError, error, data, refetch } = useCurWeatherQuery(curCity);

  useErrors([{ isError, error }]);

let curTime = ''

 if(!isLoading){
  const date = new Date(data?.dt * 1000);
   curTime = changeTimeFormat(date)
 }

   let curWeather = data?.weather;
   let weather = "";
   if (curWeather) {
     weather = curWeather[0]?.main;
   }

   const videos = [clouds2, snowfall, mountain, nightlight, sea, northenlights]

   const randomNumber = Math.random() * (5 - 0) + 0;
   const randomVideo = videos[Math.trunc(randomNumber)]


  return isLoading ? (
    <Skeleton className="homeCityDiv" />
  ) : (
    <>
      <Link to={`/dashboard/${curCity}`} className="homeCityDiv">
        <video className="videoTag" autoPlay loop muted>
          <source src={randomVideo} type="video/mp4" />
        </video>
        <div className="firsthalfContainer">
          <div className="locationContainer">
            <Typography
              variant="h4"
              sx={{ fontSize: "1.3rem", fontWeight: "600" }}
            >
              {data?.name}
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "500" }}>
              {curTime}
            </Typography>
          </div>
          <div className="weatherTypeContainer">
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "300" }}>
              {weather}
            </Typography>
          </div>
        </div>
        <div className="secondhalfContainer">
          <div className="tempContainer">
            <Typography sx={{ fontSize: "3rem", fontWeight: "300" }}>
              {Math.trunc(data?.main?.temp - 273.15)}°
            </Typography>
          </div>
          <div className="highLowContainer">
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "300" }}>
              H:{Math.trunc(data?.main?.temp_max - 273.15)}°
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "300" }}>
              L:{Math.trunc(data?.main?.temp_min - 273.15)}°
            </Typography>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeCities