import "./Hoteldetails.css";

function Hoteldetails({ hotel, onClose }) {
  return (
    <div className="hotel-details-overlay">
      <div className="hotel-details-modal">

        <button
          type="button"
          className="close-details"
          onClick={onClose}
        >
          ×
        </button>

        <div className="hotel-details-image">
          <img src={hotel.image} alt={hotel.name} />
        </div>

        <div className="hotel-description">
          <h2>{hotel.name}</h2>
          <p>{hotel.city}</p>
          <p>{hotel.location}</p>
          <p>Price: ₹{hotel.price}</p>
          <p>Rating: ⭐ {hotel.rating}</p>
          <p>{hotel.description}</p>

          <button type="button" className="book-hotel">
            Book Hotel
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hoteldetails;