import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Rating from './Rating'

const CardMovie = ({movie}) => {
  return (
    <div >
       <Card style={{ width: '18rem', margin:'1rem'}} >
      <Card.Img style={{height:'400px'}} variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Rating searchRate={movie.rate} isRating={false}/>
        <Card.Text style={{height:'160px'}}>
          {movie.description}
          </Card.Text>
        <Button variant="primary">See Movie</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardMovie