import { useState, useEffect } from 'react'

import Nav from 'react-bootstrap/Nav'
import NavHead from './assets/components/Navbar/NavHead'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MOVIES } from './assets/movieData'

import './App.css'

import FilterPage from './assets/components/Pages/FilterPage'

function App() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [movieNum, setMovieNum] = useState(4);

  useEffect(() => {
    console.log('removed')
  }, [movieList])

  function handleMovieRemove(id) {
    let temp = movieList;
    const index = movieList.findIndex((mov) => mov.id === id);
    temp.splice(index, 1)
    setMovieList([...temp]);
  }

  return (
    <>
      <BrowserRouter>
        <NavHead movieDispCount={movieNum} handleCounter={setMovieNum} />
        <Routes>
          <Route path="/" element={
            <FilterPage
              movieNum={movieNum}
              movieList={movieList}
              rmFunc={handleMovieRemove} />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
