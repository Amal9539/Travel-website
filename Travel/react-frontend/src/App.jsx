import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Component/Home';
import TouristPlaces from './Component/TouristPlaces';
import NavTravel from './Component/NavTravel';
import Packages from './Component/Packages';
import Guid from './Component/Guid';
import Footer from './Component/Footer';
import District from './Component/District';
import ViewDistrict from './Component/ViewDistrict';
import Touristdetails from './Component/Touristdetails';
import Login from './Component/Login';
import Register from './Component/Register';
import { GoogleOAuthProvider } from "@react-oauth/google";
import TaxiBooking from './Component/TaxiBooking';
import TouristPackage from './Component/TouristPackage';
import Packagedetail from './Component/Packagedetail';
import Profile from './Component/Profile';
import MyBookings from './Component/MyBookings';


function App() {
  return (
    <GoogleOAuthProvider clientId="641386597689-kc2i9rcq6as8lgugdlk3seouv5qpqvqv.apps.googleusercontent.com">
    <BrowserRouter>

      <NavTravel />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Packages />
            <TouristPlaces />
            <District />
            <TouristPackage/>
            <TaxiBooking/>
            <Guid />

          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewdistrict/:name" element={<ViewDistrict />} />
        <Route path="/details/:id" element={<Touristdetails />} />
        <Route path="/package/:id" element={<Packagedetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<MyBookings />} />

      </Routes>

      <Footer />

    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
