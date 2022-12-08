import { useState } from 'react'

import Nav from 'react-bootstrap/Nav'
import NavHead from './assets/components/Navbar/NavHead'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MOVIES } from './assets/movieData'

import './App.css'

import FilterPage from './assets/components/Pages/FilterPage'

function App() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [movieNum, setMovieNum] = useState(4);


  return (
    <>
      <BrowserRouter>
        <NavHead movieDispCount={movieNum} handleCounter={setMovieNum} />
        <Routes>
          <Route path="/" element={<FilterPage movieNum={movieNum} movieList={movieList} />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
