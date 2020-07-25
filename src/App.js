import React from 'react';
import './App.css';
import {Nav,NavItem,NavLink,Button,Container,Row} from "reactstrap";

import Film from "./component/film";



function App() {

  var moviesData = [
    {name:"Star Wars : L'ascension de Skywalker", desc:"La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette ...", img:"/starwars.jpg", note:6.7, vote:5},
    {name:"Maléfique : Le pouvoir du mal", desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur ...", img:"/maleficent.jpg", note:8.2, vote:3},
    {name:"Jumanji: The Next Level", desc: "L’équipe est de retour, mais le jeu a changé. Alors qu’ils retournent dans Jumanji pour secourir ...", img:"/jumanji.jpg", note:4, vote:5},
    {name:"Once Upon a Time... in Hollywood", desc: "En 1969, Rick Dalton – star déclinante d'une série télévisée de western – et Cliff Booth ...", img:"/once_upon.jpg", note:6, vote:7},
    {name:"La Reine des neiges 2", desc: "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses ...", img:"/frozen.jpg", note:4.6, vote:3},
    {name:"Terminator: Dark Fate", desc: "De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile...", img:"/terminator.jpg", note:6.1, vote:1},
  ]

  var moviz = moviesData.map((el, i)=>{
    return <Film  movieName= {el.name} movieDesc={el.desc} movieImg={el.img} movieNote={el.note} movieVote={el.vote}/>
    
  })
  console.log(moviz)
  return (

     <div style={{backgroundColor:"#343B40"}}>
       <Container> 

       <Row>
          <Nav>
            <span className="navbar-brand">
              <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
            </span>
            <NavItem>
              <NavLink style={{color:'white'}}>Last Releases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Button type="button">11 films</Button></NavLink>
            </NavItem>
          </Nav>
            <Nav>
                <img src="/logo.png" alt=""/>
                <p style={{color:"white"}}>Last Releases</p>
                <Button color="secondary">11 films</Button>
            </Nav>
            <Row>
               {moviz}
            </Row>
          
         
        </Row>

   </Container>
      
   </div>
  )
}

export default App;
