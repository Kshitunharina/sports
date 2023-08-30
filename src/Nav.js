import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/stream">Stream</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/plays">Plays</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
        <li>
          <a href="/activities">Activities</a>
        </li>
        <li>
          <a href="/buzz">Buzz</a>
        </li>
        <li>
          <a href="/icc">ICC men's cricket worldcup India 2023</a>
        </li>
      </ul>
      <ul className="navlist1">
        <li>
          <a href="/listyourshow">ListYourshow</a>
        </li>
        <li>
          <a href="">Corporates</a>
        </li>
        <li>
          <a href="/offer">Offers</a>
        </li>
        <li>
          <a href="/giftcard">Gift Cards</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;