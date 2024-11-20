
import { Home } from "./pages/Home";


import "./App.css"
import FlightBookingPage from "./pages/FlightBooking.jsx";
import PaymentPage from "./pages/paymentPage.jsx";
import HotelBookingForm from "./pages/HoteBooking/HotelBookingForm.jsx";
import HotelPaymentPage from "./pages/HoteBooking/HotelPaymentPage.jsx";
import HotelConfirmationPage from "./pages/HoteBooking/HotelConfirmationPage.jsx";
import BlogList from "./BlogApp/BlogApp.jsx";
import BlogPostDetails from "./BlogApp/BlogDetail.jsx";
import BlogCreation from "./BlogApp/BlogCreation.jsx";
import Gallery from "./GALLERY/gallery.jsx";
import AboutUs from "./components/AboutUs/AboutUs.js";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/flightbooking" element={<FlightBookingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/hotel-booking-form" element={<HotelBookingForm/>}/>
      <Route path="/hotel-payment" element={<HotelPaymentPage/>}/>
      <Route path="/confirmation" element={<HotelConfirmationPage/>}/>
      <Route path="/blogs" element={<BlogList/>}/>
      <Route path="/blogs/:id" element={<BlogPostDetails/>}/>
      <Route path="/create-post" element={<BlogCreation/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
     </Routes> 
    </div>
  );
}

export default App;
