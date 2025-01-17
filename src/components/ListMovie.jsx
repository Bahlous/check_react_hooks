import React from 'react'
import CardMovie from './CardMovie'

const ListMovie = ({movies, searchTitle, searchRate}) => {

  return (
    <div style={{display:'flex',justifyContent:'center', flexWrap:'wrap', backgroundColor:'black'}}>
    {movies
    .filter((movie)=>movie.title.toUpperCase().includes(searchTitle.toUpperCase())&& movie.rate === searchRate)
  
    .map(movie=><CardMovie movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default ListMovie