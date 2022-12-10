import { useState, useEffect } from 'react'

import Nav from 'react-bootstrap/Nav'
import NavHead from './assets/components/Navbar/NavHead'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MOVIES } from './assets/movieData'

import './App.css'

import FilterPage from './assets/components/Pages/FilterPage'
import AddPage from './assets/components/Pages/addPage/AddPage'

function App() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [movieNum, setMovieNum] = useState(4);
  const [filteredList, setFilteredList] = useState([]);
  const [genreToFilter, setGenreToFilter] = useState('');


  function handleMovieRemove(id) {
    let temp = movieList;
    const index = movieList.findIndex((mov) => mov.id === id);
    temp.splice(index, 1);
    setMovieList([...temp]);

    const fTemp = filteredList;
    const indexToRm = fTemp.findIndex((fMovie) => fMovie.id === id);
    fTemp.splice(indexToRm, 1);
    setFilteredList([...fTemp])
  }

  function toggleFav(id) {
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

          <Route path='addMovie' element={<AddPage movies={movieList} />} />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
