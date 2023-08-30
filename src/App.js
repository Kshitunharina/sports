import React from "react";
import Sports from "./Sports";
import Navbar from "./Nav.js";
import Header from "./Header";
import Offer from "./Offer";
//import Navbar from './Navbar.js'
import Giftcard from "./Giftcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from "./Activities.js";
import ListYourShow from "./ListYourShow.js";
import Events from "./Events.js";
import Stream from "./Stream";
import Buzz from "./Buzz";
import Movies from "./Movies.js";
import ICC from "./ICC";
import Ntest from "./Ntest";
import Plays from "./Plays";

function App() {
  return (
    //  <Home></Home>

    <BrowserRouter>
    <Header></Header>
    
    {/* <Ntest></Ntest> */}
      <Routes>
      
      <Route path="/" element={<Ntest></Ntest>}></Route>
        <Route path="/offer" element={<Offer></Offer>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/sports" element={<Sports></Sports>}></Route>
        <Route path="/offers" element={<Offer></Offer>}></Route>
        <Route path="/giftcard" element={<Giftcard></Giftcard>}></Route>
        <Route path="/activities" element={<Activities></Activities>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/stream" element={<Stream></Stream>}></Route>
        <Route path="/buzz" element={<Buzz></Buzz>}></Route>
        <Route path="/icc" element={<ICC></ICC>}></Route>
        <Route path="/plays" element={<Plays></Plays>}></Route>
        <Route
          path="/listyourshow"
          element={<ListYourShow></ListYourShow>}
        ></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react'
// import { Container,Row,Col } from 'reactstrap'
// import Example from './Example'

// function App() {
//   return (
//    <Container>
//     <Row>
//     <Example></Example>
//     </Row>
//    </Container>
//   )
// }

// export default App
