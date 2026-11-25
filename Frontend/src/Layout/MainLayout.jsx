import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./MainLayout.css";
import { useState } from "react";

function MainLayout() {
  const [filters, setFilters] = useState({
    place: "",
    city: "",
    maxPrice: "",
    minPrice: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    place: "",
    city: "",
    maxPrice: "",
    minPrice: "",
  });

  const handleApplyFilters = () => {
    setAppliedFilters({ ...filters });
  };

  const handleResetFilters = () => {
    const intialFilters = {
      place: "",
      city: "",
      maxPrice: "",
      minPrice: "",
    };

    setFilters(intialFilters);
    setAppliedFilters(intialFilters)
  };

  return (
    <>
      <Navbar />

      <div className="main-container">
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          onApply={handleApplyFilters}
          onResetFilter={handleResetFilters}
        />

        <main className="content">
          <Outlet
            context={{
              appliedFilters,
            }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
