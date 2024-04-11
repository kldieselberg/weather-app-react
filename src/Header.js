import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <input
          type="text"
          placeholder="Search for a City"
          className="search-input"
        />
        <input type="submit" value="Search" className="submit-input" />
      </form>
    </div>
  );
}
