import {
  Typography
} from "@mui/material";
import React from 'react';
import './HomeCities.css';
import { Link } from "react-router-dom";

const HomeCities = () => {


  return (
    <>
      <Link to={`/dashboard/Delhi`} className="homeCityDiv">
        <div className="firsthalfContainer">
          <div className="locationContainer">
            <Typography
              variant="h4"
              sx={{ fontSize: "1.3rem", fontWeight: "600" }}
            >
              New York
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "500" }}>
              1:41 AM
            </Typography>
          </div>
          <div className="weatherTypeContainer">
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "300" }}>
              Partly Cloudy
            </Typography>
          </div>
        </div>
        <div className="secondhalfContainer">
          <div className="tempContainer">
            <Typography sx={{ fontSize: "3rem", fontWeight: "300" }}>
              30°
            </Typography>
          </div>
          <div className="highLowContainer">
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "300" }}>
              H:33°
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: "300" }}>
              L:24°
            </Typography>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomeCities