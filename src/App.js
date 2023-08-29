import React from 'react'
import Sports from './Sports'
import Navbar from './Nav'
import Header from './Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
  //  <Home></Home>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    {/* <Route path="/" element={<Home></Home>}> </Route> */}
    
    <Route path='/header' element={<Header></Header>}></Route>
    <Route path='/sports' element={<Sports></Sports>}></Route>
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