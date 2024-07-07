import React, { useState } from "react";
import WeatherWidget from "../../Components/WeatherWidget/WeatherWidget";
import "./home.css";
import axios from 'axios'
import {
  Container,
  Paper,
  Stack,
  Typography,
  styled,
  Input,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import HomeCities from "../../Components/Cities/HomeCities";
import toast from "react-hot-toast"

const Home = () => {
  const [search, setSearch] = useState("");
  const [curData, setData] = useState({});
  const [loading, setIsLoading] = useState(false)
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  //https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6cfb46eca0d4f9bd7c6518971820b06f

  const GetCityWeatherData = async (e) => {
    e.preventDefault();

    if(!search.length) return;

    const toastId = toast.loading("Fetching Data...");

    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${baseUrl}?q=${search}&appid=6cfb46eca0d4f9bd7c6518971820b06f`
      );
      setData(data)
      toast.success(data?.message || "success !", { id: toastId });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
    setSearch('')
  };


  return (
    <div className="home">
      <Box className="homeHeader">
        <Typography variant="h4" sx={{ fontSize: "1.8rem", fontWeight: "800" }}>
          Weather
        </Typography>
        <div className="buttonDiv">
          <button>Logout</button>
        </div>
      </Box>

      <form onSubmit={(e) => GetCityWeatherData(e)} className="textAreaBox">
        <Search className="SearchIcon" />
        <input
          type="text"
          name="city"
          id="textarea"
          placeholder="search for a city ..."
          className="cityNameTextArea"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        ></input>
      </form>
      <div className="homeCitiesBox">
        <HomeCities />
        <HomeCities />
      </div>
    </div>
  );
};

export default Home;
