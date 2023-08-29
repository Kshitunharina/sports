import React from 'react'
import Sports from './Sports'
import Navbar from './Nav.js'
import Header from './Header'
import Offer from './Offer'
//import Navbar from './Navbar.js'
import Giftcard from './Giftcard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
  //  <Home></Home>
  <BrowserRouter>
  <Navbar></Navbar>
 
  <Routes>
    {/* <Route path="/" element={<Home></Home>}> </Route> */}
    <Route path='/offer' element={<Offer></Offer>}></Route>
    <Route path='/header' element={<Header></Header>}></Route>
    <Route path='/sports' element={<Sports></Sports>}></Route>
    <Route path='/offers' element={<Offer></Offer>}></Route>
    <Route path='/Giftcard' element={<Giftcard></Giftcard>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App


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