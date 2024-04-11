import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <Header />
      <div className="city">
        <h1>Bangkok</h1>  
        <div className="temp-container">
         <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png "
            className="icon"
            width=""
          />
        <div className="detail">
          <span className="temp">24</span>
          <span className="deg">°C</span>
        </div>
        </div>
        <br />
        <div className="time-detail">
          <span id="day-time">Wednesday 16:11</span>
          <span>, Few Clouds</span>
          <p></p>
          Humidity:
          <span className="humidity"> 98%</span>
          <br />
          Wind:
          <span className="wind"> 2.24 km/h</span>
        </div>
        <p />
        <Footer />
      </div>
    </div>
  );
}
