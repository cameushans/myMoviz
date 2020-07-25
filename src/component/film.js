import React from 'react';
import {
    Card, CardImg,
     CardText, CardBody,
     ButtonGroup, Button,
    Col,Row
  } from 'reactstrap';
import {FontAwesomeIcon} from   "@fortawesome/react-fontawesome";
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';

var tenStars = [] 

for (var i=0; i<10; i++) {
    tenStars.push(<FontAwesomeIcon icon={faStar}/>)
}


var film = []
for(let i= 0;i<20;i++){
 
    film.push( 
    
    <Col  lg="4" md="6" xs="12">
        <Card className='mt-5'>
                <CardImg top  src="/maleficent.jpg" alt="Card image cap" />
                <CardBody>
                    
                    <CardText >Like <FontAwesomeIcon icon={faHeart}/></CardText>
                    <CardText >Nombre de vues <FontAwesomeIcon icon={faVideo}/></CardText>
                    <CardText >Mon avis {tenStars}<ButtonGroup size="sm"><Button size="sm">-</Button><Button size="sm">+</Button></ButtonGroup></CardText>
                    <CardText >Moyenne {tenStars}< FontAwesomeIcon icon={faStar}/></CardText>
                    <CardText >Star Wars : L'Ascension de Skywalker</CardText>
                    <CardText >fjhzdlkfhsdkjfhksjdhfkjdshfkjdshfkdshfdskjfhdskjfhsdk</CardText>
                
                </CardBody>
        </Card>

    </Col>
    )}


const  Film = (props)=>{
    return(
     <Row>
             {film}
     </Row>
    )
}
export default Film;
