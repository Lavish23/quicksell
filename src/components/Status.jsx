import React from "react";
import "./Status.css"; // Include this CSS file for styling

function Status({ data }) {
  // Filter the tickets based on status
  const todoTickets = data.filter((ticket) => ticket.status === "Todo");
  const inProgressTickets = data.filter((ticket) => ticket.status === "In progress");
  const doneTickets = data.filter((ticket) => ticket.status === "Done");
  const cancelledTickets = data.filter((ticket) => ticket.status === "Cancelled");
  const backlogTickets = data.filter((ticket) => ticket.status === "Backlog");

  return (
    <div className="status-view">
      <h2 className="status-title">Status View</h2>
      <div className="status-columns">
        {/* Todo Tickets */}
        <div className="status-column">
          <h3 className="status-header">Todo</h3>
          <ul className="status-list">
            {todoTickets.map((ticket) => (
              <li key={ticket.id} className="status-item">
                {ticket.title}
              </li>
            ))}
          </ul>
        </div>

        {/* In Progress Tickets */}
        <div className="status-column">
          <h3 className="status-header">In Progress</h3>
          <ul className="status-list">
            {inProgressTickets.map((ticket) => (
              <li key={ticket.id} className="status-item">
                {ticket.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Done Tickets */}
        <div className="status-column">
          <h3 className="status-header">Done</h3>
          <ul className="status-list">
            {doneTickets.map((ticket) => (
              <li key={ticket.id} className="status-item">
                {ticket.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Cancelled Tickets */}
        <div className="status-column">
          <h3 className="status-header">Cancelled</h3>
          <ul className="status-list">
            {cancelledTickets.map((ticket) => (
              <li key={ticket.id} className="status-item">
                {ticket.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Backlog Tickets */}
        <div className="status-column">
          <h3 className="status-header">Backlog</h3>
          <ul className="status-list">
            {backlogTickets.map((ticket) => (
              <li key={ticket.id} className="status-item">
                {ticket.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Status;
