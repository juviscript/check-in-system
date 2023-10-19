import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckInTable from "./components/CheckInTable";
import Navigation from "./components/Navigation";
import Login from "./components/Login"
import CheckInForm from "./components/CheckInForm";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navigation />
          


          <Routes>
            <Route path="/" element={<CheckInTable />} />
            <Route path="/check-in" element={<CheckInForm />} />
            <Route path="/editDetails/:id" element={<CheckInForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* 

TODO: Decide if I should start with a "Welcome" page, then choose what you want to see? Or just start on check in entries. 
TODO: Adjust color theming. 
TODO: Create brand logo with free generators online. 
TODO: Create a 'User' page to see previous check in times. 
TODO: Figure out a way to make the form appear when selecting "Check In" button on home page.
TODO: When submitting form, reroute POST endpoint ("/check-in/entries") to GET ("check-in/entries/all") to update page. 

*/
