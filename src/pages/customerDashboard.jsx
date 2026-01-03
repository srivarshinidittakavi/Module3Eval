// src/pages/CustomerDashboard.jsx
import React, { useState, useEffect } from "react";

const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("restaurants")) || [];
    setRestaurants(data);
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <ul>
        {restaurants.map((r) => (
          <li key={r.id}>
            {r.name} - {r.address} - {r.type} - {r.parking ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDashboard;
