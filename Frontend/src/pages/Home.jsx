import "./Home.css";
import HotelCard from "../ReuseComponent/HotelCard";
import { useOutletContext } from "react-router-dom";
import Addhotel from "./Addhotel";

function Home() {
  const { appliedFilters } = useOutletContext();

  const hotels = [
    {
      id: 1,
      name: "Grand Palace Hotel",
      city: "Coimbatore",
      location: "Race Course",
      price: 2500,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description:
        "A comfortable luxury hotel with modern rooms and excellent service.",
    },
    {
      id: 2,
      name: "The Royal Residency",
      city: "Tiruppur",
      location: "Avinashi Road",
      price: 1800,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      description:
        "A peaceful stay with spacious rooms and convenient facilities.",
    },
    {
      id: 3,
      name: "Ocean Breeze Resort",
      city: "Chennai",
      location: "ECR Road",
      price: 3500,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description:
        "A beautiful resort offering a relaxing experience near the beach.",
    },
    {
      id: 4,
      name: "Green Valley Inn",
      city: "Ooty",
      location: "Botanical Garden Road",
      price: 2200,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      description:
        "A scenic hotel surrounded by greenery and beautiful mountain views.",
    },
    {
      id: 5,
      name: "Mountain View Suites",
      city: "Kodaikanal",
      location: "Lake Road",
      price: 3000,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
      description:
        "A relaxing accommodation with scenic views and comfortable rooms.",
    },
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchCity =
      !appliedFilters.city ||
      hotel.city.toLowerCase() === appliedFilters.city.toLowerCase();

    const matchPlace =
      !appliedFilters.place ||
      hotel.name.toLowerCase().includes(appliedFilters.place.toLowerCase()) ||
      hotel.location.toLowerCase().includes(appliedFilters.place.toLowerCase());

    const matchMinPrice =
      !appliedFilters.minPrice ||
      hotel.price >= Number(appliedFilters.minPrice);

    const matchMaxPrice =
      !appliedFilters.maxPrice ||
      hotel.price <= Number(appliedFilters.maxPrice);

    return matchCity && matchPlace && matchMinPrice && matchMaxPrice;
  });

  return (
    <>
      <div className="hotel-page">
        <div className="hotel-page-header">
          <h3>Staycation</h3>
          <span>Make your trip restful and comfortable</span>
          <button className="addhotel" onClick={()=> setShowform(true)}>Add Hotel</button>
        </div>
      </div>
      <div className="search-found"> 
        {filteredHotels.length}{" "}
        {filteredHotels.length === 1 ? "hotel found" : "hotels found"}
      </div>
      <div className="Hotel-list">
        {filteredHotels.length === 0 ? (
          <p>No hotels found matching your filters.</p>
        ) : (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        )}
      </div>
    </>
  );
}

export default Home;
