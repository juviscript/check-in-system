import "./App.css";
import CheckInTable from "./components/CheckInTable";
import Navigation from "./components/Navigation";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiDownArrowAlt } from "react-icons/bi"
import { Button } from "react-bootstrap";
import CheckInEntry from "./components/CheckInEntry";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Container fluid className="my-5 py-3 w-75 rounded bs-light-text-emphasis">
          <h2>Welcome to Checkr</h2>
          <h5 className="mt-4"><BiDownArrowAlt /> Get started below <BiDownArrowAlt /> </h5>
        </Container>
        <Container>
          <Button>Check-In</Button>

          <CheckInEntry />
        </Container>
        <CheckInTable />
      </div>
    </div>
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
