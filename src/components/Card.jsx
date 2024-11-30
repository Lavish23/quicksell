import React from "react";
import "./styles.css";
import logo from '../assets/Cancelled.svg'

function Card({ id }) {
  return (
    <div className="card">
      <div className="card-container">
      <h4>{id}</h4>
      <img src={logo} alt="" />

      </div>
      <p>Feature Request</p>
    </div>
  );
}

export default Card;
