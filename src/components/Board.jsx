import React from "react";
import Column from "./Column";
import "./styles.css";

function Board() {
  const columns = [
    { id: "todo", title: "Todo", cards: ["CAM-4", "CAM-8", "CAM-2", "CAM-1"] },
    { id: "in-progress", title: "In Progress", cards: ["CAM-3"] },
    { id: "done", title: "Done", cards: ["CAM-6", "CAM-7", "CAM-11", "CAM-10", "CAM-9"] },
    { id: "canceled", title: "Canceled", cards: [] },
  ];

  return (
    <div className="board">
      {columns.map((column) => (
        <Column key={column.id} title={column.title} cards={column.cards} />
      ))}
    </div>
  );
}

export default Board;
