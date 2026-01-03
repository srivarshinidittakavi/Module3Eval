import { useState } from "react";

const types = [
  "Rajasthani",
  "Gujarati",
  "Mughlai",
  "Jain",
  "North Indian",
  "South Indian",
  "Thai"
];

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState(types[0]);
  const [parking, setParking] = useState(false);
  const [search, setSearch] = useState("");

  const addRestaurant = () => {
    if (!name || !address) return alert("Enter name & address");
    setRestaurants([
      ...restaurants,
      {
        id: Date.now(),
        name,
        address,
        type,
        parking,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
      }
    ]);
    setName("");
    setAddress("");
    setType(types[0]);
    setParking(false);
  };

  // Filter restaurants based on search input (name or type)
  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      {/* Add restaurant form */}
      <input
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        {types.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>
      <label>
        Parking
        <input
          type="checkbox"
          checked={parking}
          onChange={(e) => setParking(e.target.checked)}
        />
      </label>
      <button onClick={addRestaurant}>Add Restaurant</button>

      {/* Search bar */}
      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Search by name or type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Restaurant list */}
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {filteredRestaurants.map((r) => (
          <div key={r.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px", width: "250px" }}>
            <img src={r.image} alt={r.name} width="100%" height="150px" />
            <h4>{r.name}</h4>
            <p>{r.address}</p>
            <p>Type: {r.type}</p>
            <p>Parking: {r.parking ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
