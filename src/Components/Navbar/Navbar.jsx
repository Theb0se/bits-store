import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [profile, setprofile] = useState(false);

  const showProfile = () => {
    if (!profile) {
      setprofile(true);
    } else {
      setprofile(false);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/" className="brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/429-running-shoe.svg/2048px-429-running-shoe.svg.png"
            alt="Logo.svg"
          />
          <h1>BitsStore</h1>
        </a>
      </div>

      <div className="navLinks">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Orders</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contect</a>
          </li>
        </ul>
      </div>

      <div className="profile">
        <div className="avatar" onClick={showProfile}>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div
          className={profile ? "profileData profileDataOpen" : "profileData"}
        >
          <ul>
            <li>Profile</li>
            <li>Orders</li>
            <li>Cart</li>
            <li>Contact us</li>
            <li>logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
