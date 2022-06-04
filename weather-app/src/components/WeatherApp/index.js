import React from "react";
import axios from "axios";

export const WeatherApp = () => {
  const [temperature, setTemperature] = React.useState("");
  const [country, setCountry] = React.useState("AU");

  const handleGetWeatherData = (country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=16596fe956171a7376f2ba91213e3499`,
    })
      .then((response) => {
        console.log(response.data.main.temp);
        setTemperature(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Weather App</h1>
        <div className="col-5">
          <div className="form-group">
          <label htmlFor="country" style={{display: none}}>Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              aria-describedby="emailHelp"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country"
            />
          </div>
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleGetWeatherData(country);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div>{temperature}</div>
    </div>
  );
};
