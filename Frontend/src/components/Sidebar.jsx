
import './Sidebar.css'

function Sidebar({ filters, setFilters, onApply ,onResetFilter}) {
  return (
    <div className="side-bar">
      <div className="filter">

        <h2>Find Your Stay</h2>
        <p className="filter-subtitle">
          Filter hotels to find your perfect stay.
        </p>

        <div className="filter-group">
          <label>Place</label>
          <input
            type="text"
            placeholder="Enter place or location"
            value={filters.place}
            onChange={(e) =>
              setFilters({ ...filters, place: e.target.value })
            }
          />
        </div>

        <div className="filter-group">
          <label>City</label>
          <select
            value={filters.city}
            onChange={(e) =>
              setFilters({ ...filters, city: e.target.value })
            }
          >
            <option value="">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Ooty">Ooty</option>
            <option value="Kodaikanal">Kodaikanal</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price Range (₹)</label>

          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: e.target.value })
              }
            />

            <span>to</span>

            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            />
          </div>
        </div>

        <button className="filter-btn" onClick={onApply}>
          Apply Filters
        </button>
        <button className='reset-btn' onClick={onResetFilter}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Sidebar
