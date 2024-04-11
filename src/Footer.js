import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        coded by{" "}
        <a href="https://github.com/Kristina-Dieselberg">
          Kristina Dieselberg{" "}
        </a>{" "}
        and is open sourced on{" "}
        <a href="https://github.com/Kristina-Dieselberg/weather-app-react">
          Github
        </a>
        and hosted by <a href="https://www.netlify.com">Netlify</a>
      </p>
    </div>
  );
}
