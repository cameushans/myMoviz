import React from 'react';
import './App.css';
import {Nav,Button,Container,Row} from "reactstrap";

import Film from "./component/film";


function App() {
  return (

     <div style={{backgroundColor:"#343B40"}}>
       <Container> 

       <Row>
            <Nav>
                <img  src="/logo.png" alt=""/>
                <p style={{color:"white"}}>Last Releases</p>
                <Button color="secondary">11 films</Button>
            </Nav>
          
          <Film/>
    </Row>

   </Container>
      
   </div>
  )
}

export default App;
