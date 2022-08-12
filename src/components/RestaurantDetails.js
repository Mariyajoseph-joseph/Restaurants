import React from 'react'

import { Row ,Col, ListGroup,Image,Card ,Button} from 'react-bootstrap'
import { useParams,Link} from 'react-router-dom'
import Review from './Review'
import {useSelector} from 'react-redux'



function RestaurantDetails({match}){
 
  const restaurantData = useSelector(state =>state.restaurantReducer)

  const {restaurants} = restaurantData
  const details = restaurants.find((i) =>i.id == match.params.id)
 
  return (
       <>
       <Link className="btn btn-outline-dark my-2 rounded btn-sm" to="/"> Back </Link>
    {
      restaurantData? (
        <Row className="my-3">
          <Col md={3}>
            <Image className="img" src={restaurantData.photograph} alt={restaurantData.name} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup.Item>
                  <h2>{restaurantData.name}</h2>
                  <p>{restaurantData.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                   <p>Cusisine Type:{restaurantData.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                   <p>Address:{restaurantData.address}</p>
            </ListGroup.Item>
          </Col>
          
          <Col md={4}>
          <ListGroup.Item>
          <h4>Operating Hours:</h4>
          <p>Sunday:{restaurantData.operating_hours.Sunday}</p>
          <p>Monday:{restaurantData.operating_hours.Monday}</p>
          <p>Tueseday:{restaurantData.operating_hours.Tueseday}</p>
          <p>Wednesday:{restaurantData.operating_hours.Wednesday}</p>
          <p>Thursday:{restaurantData.operating_hours.Thursday}</p>
          <p>Friday:{restaurantData.operating_hours.Friday}</p>
          <p>Saturday:{restaurantData.operating_hours.Saturday}</p>
          </ListGroup.Item>
          </Col>
          <Row>
                   <Card className="my-3 mx-3 p-5 rounded card">
                 <Review data={restaurantData.reviews}/>
                  </Card>
          </Row>
          </Row>
      ):'null'
    }
    </>
  )
}

export default RestaurantDetails