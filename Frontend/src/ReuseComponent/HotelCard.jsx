
import './HotelCard.css'

function HotelCard({ hotel,onClick }) {

  return (
    <div className="Product-card" onClick={ ()=> {console.log("Hotel card clicked:", hotel.name),onClick()}}>

      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>

      <div className="hotel-details">
        <h3>{hotel.name}</h3>
        <span>{hotel.city}</span>

        <h4>{hotel.location}</h4>

        <p>Price: ₹{hotel.price}</p>

        <p>Rating: ⭐ {hotel.rating}</p>

        <p>{hotel.description}</p>
      </div>

    </div>
  )
}

export default HotelCard
