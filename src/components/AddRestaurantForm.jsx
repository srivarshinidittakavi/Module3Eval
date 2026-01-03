
import { useState } from "react";

const AddRestaurantForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Rajasthani");
  const [parking, setParking] = useState(true);
  const [image, setImage] = useState("https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) return alert("Name and address required!");
    const restaurant = {
      restaurantID: Date.now(),
      restaurantName: name,
      address,
      type,
      parkingLot: parking,
      image
    };
    onAdd(restaurant);
    setName(""); setAddress(""); 
  };

  return (
    <div style={{ padding: "20px", width: "300px", borderRight: "1px solid gray" }}>
      <h3>Add Restaurant</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option>Rajasthani</option>
          <option>Gujarati</option>
          <option>Mughlai</option>
          <option>Jain</option>
          <option>Thai</option>
          <option>North Indian</option>
          <option>South Indian</option>
        </select>
        <select value={parking} onChange={e => setParking(e.target.value === "true")}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
