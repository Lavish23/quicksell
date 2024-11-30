import React from "react";
import Card from "./Card";
import "./styles.css";

function Column({ title, cards }) {
  return (
    <div className="column">
      <div className="column-header">
        <h3>{title}</h3>
        <span>{cards.length}</span>
      </div>
      <div className="column-content">
        {cards.map((card, index) => (
          <Card key={index} id={card} />
        ))}
      </div>
    </div>
  );
}

export default Column;
