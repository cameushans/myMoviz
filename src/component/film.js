import React from 'react';
import {
    Card, CardImg,
     CardText, CardBody,
     ButtonGroup, Button,
    Col
  } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';


var tenStars = [] 

for (var i=0; i<10; i++) {
    tenStars.push(<FontAwesomeIcon icon={faStar}/>)
}

var film = []

const Film = (props)=>{

    var tenStarsNote = [] 
    for (var i=0; i<10; i++) {
        var color = {}
        if(i<props.movieNote){
            color = {color: '#f1c40f'}
        }
        tenStarsNote.push(<FontAwesomeIcon style={color}icon={faStar}/>)
    }

    // console.log(props)

    return(

          <Col lg="4" md="6" xs="12">
            <Card className='mt-5'>
                    <CardImg top src={props.movieImg} alt="Card image cap" />
                    <CardBody>
                        
                        <CardText >Like <FontAwesomeIcon style={{cursor:'pointer'}} icon={faHeart}/></CardText>
                        <CardText >Nombre de vues <FontAwesomeIcon icon={faVideo}/></CardText>
                        <CardText >Mon avis {tenStars}<ButtonGroup size="sm"><Button size="sm">-</Button><Button size="sm">+</Button></ButtonGroup></CardText>
                        <CardText >Moyenne {tenStarsNote}</CardText>
                        <CardText >{props.movieName}</CardText>
                        <CardText style={{height:'75px'}}>{props.movieDesc}</CardText>
                    
                    </CardBody>
            </Card>
    
        </Col>
             

    )
}
export default Film;
