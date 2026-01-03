
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ data, admin, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img src={data.image} alt={data.restaurantName} width="100%" height="150px" />
      <h4>{data.restaurantName}</h4>
      <p>{data.address}</p>
      <p>Type: {data.type}</p>
      <p>Parking: {data.parkingLot ? "Available" : "Not Available"}</p>
      {admin && (
        <div>
          <button onClick={() => navigate(`/admin/restaurants/update/${data.restaurantID}`)}>Update</button>
          <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
