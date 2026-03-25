import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Tourist from "./Component/Tourist";
import ViewTourist from "./Component/ViewTourist";
import Update from "./Component/Update";
import AdminTaxiBookings from "./Component/AdminTaxiBookings";
import Package from "./Component/Package";
import ViewPaackage from "./Component/ViewPaackage";
import Users from "./Component/Users";
import Home from "./Component/Home";


function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Sidebar />
        

        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/touristplace" element={<Tourist />} />
            <Route path="/view" element={<ViewTourist />} />
            <Route path="/update/:id"element={<Update/>}/>
            <Route path="/taxi"element={<AdminTaxiBookings/>}/>
            <Route path="/package" element={<Package/>}/>
            <Route path="/viewpackage" element={<ViewPaackage/>}/>
            <Route path="/users" element={<Users/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
