import React from 'react'
import {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard' 
import {Row,Col} from 'react-bootstrap'


import {listRestaurants} from '../actions/restauarantAction'
import {useDispatch,useSelector} from 'react-redux'


function Home() {
    const dispatch= useDispatch()
    
    const restauarantData= useSelector(state =>state.restauarantReducer)

    const {restauarants} = restauarantData
    
    useEffect(() =>{
    dispatch(listRestaurants())
}, [])

console.log(restauarants)
 
    return (
    <Row>
        {restauarants.map(item =>(
            <Col sm={12} md={8} lg={6} xl={3}>
            <RestaurantCard item={item}/>
            </Col>
        ))}
        
    </Row>
  )
}

export default Home