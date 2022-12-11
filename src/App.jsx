import { useState, useEffect } from 'react'

import Nav from 'react-bootstrap/Nav'
import NavHead from './assets/components/Navbar/NavHead'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MOVIES } from './assets/movieData'

import './App.css'

import FilterPage from './assets/components/Pages/FilterPage'
import AddPage from './assets/components/Pages/addPage/AddPage'

function App() {
  const [movieList, setMovieList] = useState(MOVIES); //all movies objects in an array state
  const [movieNum, setMovieNum] = useState(4); //how many movies to display at one time
  const [filteredList, setFilteredList] = useState([]); //array for filtered movies by default empty and will render all movies
  const [genreToFilter, setGenreToFilter] = useState(''); //which genre the user picked to filter
  const [allGenres, setAllGenres] = useState(() => {
    //keeps an array of all unique genres from the movieList array
    let uniqueGenres = [];
    movieList.forEach(movie => {
      movie.genres.map((g) => !uniqueGenres.includes(g) ? uniqueGenres.push(g) : null);
    });
    return uniqueGenres;
  })


  function handleMovieRemove(id) {
    //function to remove movie by id from movie list and from filtered list for proper rendering
    let temp = movieList;
    const index = movieList.findIndex((mov) => mov.id === id);
    temp.splice(index, 1);
    setMovieList([...temp]);

    const fTemp = filteredList;
    const indexToRm = fTemp.findIndex((fMovie) => fMovie.id === id);
    fTemp.splice(indexToRm, 1);
    setFilteredList([...fTemp])
  }

  function handleAddMovie(movie) {
    //handles adding movie into movielist
    let temp = movieList;
    temp = [...temp, movie]
    temp = temp.sort((a, b) => b.rating - a.rating)
    setMovieList(temp);
  }

  function toggleFav(id) {
    //grabs movie by id and toggles its id value which is used to render either a full or empty star
    let temp = movieList;
    const index = movieList.findIndex((mov) => mov.id === id);
    temp[index].favorite = !temp[index].favorite;
    setMovieList([...temp]);
  }


  return (
    <>
      <BrowserRouter>

        <NavHead
          movieDispCount={movieNum}
          handleCounter={setMovieNum}
          setFilteredList={setFilteredList}
          setGenreToFilter={setGenreToFilter} />

        <Routes>
          <Route path="/" element={
            <FilterPage
              movieNum={movieNum}
              movieList={movieList}
              rmFunc={handleMovieRemove}
              toggleFunc={toggleFav}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              genreToFilter={genreToFilter}
              setGenreToFilter={setGenreToFilter} />} />

          <Route path='addMovie' element={
            <AddPage
              allGenres={allGenres}
              addMovie={handleAddMovie}
            />} />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
