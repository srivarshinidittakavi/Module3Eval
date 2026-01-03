import React, { useState, useEffect } from "react";


const restaurants = [
  {
    id: 1,
    name: "Gujarati Delight",
    type: "Gujarati",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    id: 2,
    name: "Italiano Feast",
    type: "Italian",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    id: 3,
    name: "Sushi World",
    type: "Japanese",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    id: 4,
    name: "Gujarati Rasoi",
    type: "Gujarati",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
];

const CustomerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    
    const filtered = restaurants.filter((rest) =>
      rest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rest.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchTerm]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Dashboard</h1>

      <input
        type="text"
        placeholder="Search restaurant by name or type"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((rest) => (
            <div
              key={rest.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "250px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={rest.image}
                alt={rest.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{rest.name}</h3>
              <p>Type: {rest.type}</p>
            </div>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
};
export default CustomerDashboard;