import React from 'react'
import CardMovie from './CardMovie'

const ListMovie = ({movies, searchTitle}) => {

  return (
    <div style={{display:'flex',justifyContent:'center', flexWrap:'wrap', backgroundColor:'black'}}>
    {movies
    .filter(movie=>movie.title.toUpperCase().includes(searchTitle.toUpperCase())
  )
    .map(movie=><CardMovie movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default ListMovie