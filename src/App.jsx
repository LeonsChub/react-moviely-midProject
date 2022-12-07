import { Container, Nav } from 'react-bootstrap'

import NavHead from './assets/components/Navbar/NavHead'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sidebar from './assets/components/SideBar/Sidebar'
import MovieCard from './assets/components/MovieCard/MovieCard'
import { Pagination } from 'react-bootstrap'

import { MOVIES } from './assets/movieData'
import { useState } from 'react'

import './App.css'

console.log(MOVIES)

function App() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [movieNum, setMovieNum] = useState(4);

  return (
    <div className="App">
      <NavHead movieDispCount={movieNum} handleCounter={setMovieNum} />
      <Container fluid>
        <Row>
          <Col md={2} xs={0} className='p-0 m-0'><Sidebar /></Col>
          <Col md={10} xs={12} className='p-0 m-0'>
            <h1 className='moviesHeading mt-3'>Movies</h1>
            <div id="moviesWrap">
              {movieList.map((movie) => {
                return (
                  <MovieCard movie={movie}
                    key={movie.id} />);
              }
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
