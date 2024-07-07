import React from "react";
import "./WindWidget.css";
import { Box, Typography } from "@mui/material";
import { Widgets, Air, WaterDrop, Directions } from "@mui/icons-material";

const WindWidget = ({curData}) => {

  

  return (
    <Box className="windWidgetBox">
      <div className="windWidgetHeader">
        <Air sx={{ color: "#555" }} />
        <Typography  sx={{ fontWeight: "600", fontSize: "1rem" }}>
          Wind
        </Typography>
      </div>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", paddingBottom: "2.9rem", textAlign: "center" }}
      >
        {Math.trunc(curData?.wind?.speed)} KM/H
      </Typography>
      <div className="windWidgetHeader">
        <Directions sx={{ color: "#555" }} />
        <Typography sx={{ fontWeight: "600", fontSize: "0.9rem" }}>
          Degree : {curData?.wind?.deg}°
        </Typography>
      </div>
      <div className="windWidgetHeader">
        <WaterDrop sx={{ color: "#555" }} />
        <Typography sx={{ fontWeight: "600", fontSize: "0.9rem" }}>
          Precipitation : {curData?.main?.humidity}
        </Typography>
      </div>
    </Box>
  );
};

export default WindWidget;
