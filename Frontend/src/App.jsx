import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import AddHotelForm from "./pages/Addhotel";
import AboutUs from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-hotel" element={<AddHotelForm />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="Contact" element ={<Footer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;