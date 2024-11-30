import React, { useState, useEffect } from "react";
import "./App.css"; // Add any styles you want
import Status from "./components/Status";
import User from "./components/User";

const App = () => {
  // States for grouping and ordering
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment"); // API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data"); // Handle HTTP errors
        }

        // Parse the response JSON
        const result = await response.json();
        console.log("Fetched Data:", result); // Log the fetched data
        if (result) {
          setData(result.tickets); // Only use the 'tickets' data
        }
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message); // Set error state
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData(); // Call the async function
  }, []); // Run only once when the component mounts

  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle selection for grouping or ordering
  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleOrderingChange = (newOrdering) => {
    setOrdering(newOrdering);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  if (loading) return <div>Loading...</div>; // Show a loading message until data is fetched

  return (
    <div className="app">
      <div className="dropdown">
        {/* Button to toggle dropdown */}
        <button className="dropdown-button" onClick={toggleDropdown}>
          Display ▼
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-section">
              <label>Grouping</label>
              <ul>
                <li onClick={() => handleGroupingChange("status")}>Status</li>
                <li onClick={() => handleGroupingChange("user")}>User</li>
                <li onClick={() => handleGroupingChange("priority")}>Priority</li>
              </ul>
            </div>
            <div className="dropdown-section">
              <label>Ordering</label>
              <ul>
                <li onClick={() => handleOrderingChange("priority")}>Priority</li>
                <li onClick={() => handleOrderingChange("title")}>Title</li>
                {/* <li onClick={() => handleOrderingChange("Date Added")}>Date Added</li> */}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Display the current selections */}
      <div className="selections">
        <p>Grouping: {grouping}</p>
        <p>Ordering: {ordering}</p>
      </div>

      {/* Render Status component if grouping is "status" and data is available */}
      {grouping === "status" && data.length > 0 ? (
        <Status data={data} />
      ) : grouping === "user" ? (
        <User />
      ) : null}
    </div>
  );
};

export default App;
