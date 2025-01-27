import { useState } from 'react';
import './App.css';
import ListMovie from './components/ListMovie';
import { moviesData } from './MovieData';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import FilterByTitle from './components/FilterByTitle';
import FilterByRate from './components/Rating';
function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchTitle, setsearchTitle] = useState("")
  const [searchRate, setsearchRate] = useState(1)
  // console.log(searchTitle);
  // console.log(movies);
  const addFilm= (newMovie)=> {
setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      <h1 style={{backgroundColor:'pink'}}>Movie App</h1>
      <FilterByTitle searchTitle={searchTitle} setsearchTitle={setsearchTitle}/>
      <FilterByRate searchRate={searchRate} setsearchRate={setsearchRate} isRating={true}/>
      <AddMovie addFilm={addFilm} length={movies.length}/>
      <ListMovie movies={movies} searchTitle={searchTitle} searchRate={searchRate}/>
    </div>
  );
}

export default App;
