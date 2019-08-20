import "./Search.scss";

import { MdMyLocation, MdSearch } from "react-icons/md";
import React, { useContext, useState } from "react";

import { AppStateContext } from "../../providers/app.provider";
import Favorites from "../Favorites/Favorites";
import { groupByDayOfWeek } from "../../helpers";

const Search = () => {
  const [appState, setAppState] = useContext(AppStateContext);
  const [searchInput, setSearchInput] = useState("");

  const fetchWeatherAPI = async queryString => {
    await Promise.all([
      // fetch 5 day forecast
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?${queryString}&APPID=${
          process.env.REACT_APP_OPEN_WEATHER_API_KEY
        }&units=imperial`
      ).then(response => response.json()),
      // fetch today's weather
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?${queryString}&APPID=${
          process.env.REACT_APP_OPEN_WEATHER_API_KEY
        }&units=imperial`
      ).then(response => response.json())
    ])
      .then(data => {
        setAppState({
          cityName: data[0].city.name,
          cityLatLong: data[0].city.coord,
          groupedData: groupByDayOfWeek(data[0].list),
          todaysWeather: data[1],
          favorites: JSON.parse(window.localStorage.getItem("myFavorites"))
        });
      })
      .catch(err => console.log(err));
  };
  const handleGeolocation = async () => {
    await navigator.geolocation.getCurrentPosition(position => {
      fetchWeatherAPI(
        `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      );
    });
  };
  const handleZipSearch = e => {
    e.preventDefault();
    fetchWeatherAPI(`zip=${searchInput}`);
    setSearchInput("");
  };
  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search">
      {appState.favorites && (
        <Favorites
          fetchWeatherAPI={fetchWeatherAPI}
          favorites={appState.favorites}
        />
      )}
      <form>
        <label htmlFor="zipSearch">Search your zip code...</label>
        <div className="search__bar">
          <input
            name="zipSearch"
            type="text"
            value={searchInput}
            onChange={handleChange}
            autoComplete="new-password"
            className="search__input"
          />
          <button
            onClick={handleZipSearch}
            className="search__button search__button-zip"
          >
            <MdSearch className="search__icon" />
            Search by ZipCode
          </button>
        </div>
      </form>
      <button className="search__button" onClick={handleGeolocation}>
        <MdMyLocation className="search__icon" />
        Search Weather At Your Location
      </button>
    </div>
  );
};

export default Search;
