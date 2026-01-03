
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateRestaurant = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Rajasthani");
  const [parkingLot, setParkingLot] = useState("Yes");
  const [image, setImage] = useState(
    "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("evalData")) || [];
    setRestaurants(data);

    const restaurantToEdit = data.find(
      (r) => r.restaurantID === parseInt(id)
    );

    if (restaurantToEdit) {
      setRestaurantName(restaurantToEdit.restaurantName);
      setAddress(restaurantToEdit.address);
      setType(restaurantToEdit.type);
      setParkingLot(restaurantToEdit.parkingLot ? "Yes" : "No");
      setImage(restaurantToEdit.image);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!restaurantName || !address) {
      alert("Restaurant Name and Address cannot be empty!");
      return;
    }

    // Confirm before updating
    const confirmUpdate = window.confirm(
      "Are you sure you want to update this restaurant?"
    );
    if (!confirmUpdate) return;

    // Update restaurant
    const updatedRestaurants = restaurants.map((r) =>
      r.restaurantID === parseInt(id)
        ? {
            ...r,
            restaurantName,
            address,
            type,
            parkingLot: parkingLot === "Yes",
            image,
          }
        : r
    );

    localStorage.setItem("evalData", JSON.stringify(updatedRestaurants));
    alert("Restaurant updated successfully!");
    navigate("/admin/dashboard"); 
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Update Restaurant</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Rajasthani</option>
          <option>Gujarati</option>
          <option>Mughlai</option>
          <option>Jain</option>
          <option>Thai</option>
          <option>North Indian</option>
          <option>South Indian</option>
        </select>
        <br />
        <select
          value={parkingLot}
          onChange={(e) => setParkingLot(e.target.value)}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
