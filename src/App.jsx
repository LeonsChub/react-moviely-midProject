import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavHead from './assets/components/Navbar/NavHead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sidebar from './assets/components/SideBar/Sidebar'
import MovieCard from './assets/components/MovieCard/MovieCard'

import { MOVIES } from './assets/movieData'

import './App.css'
import PagNavigation from './assets/components/PagNavigation/PagNavigation'

function App() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [movieNum, setMovieNum] = useState(4);
  const [pagActive, setPagActive] = useState(1);

  function renderByCount() {
    const moviesDom = []
    for (let i = (pagActive - 1) * movieNum; i < movieNum * pagActive; i++) {
      if (i >= movieList.length) { break; }
      moviesDom.push(<MovieCard movie={movieList[i]} key={movieList[i].id} />);
    }
    return moviesDom;
  }

  return (
    <div className="App">
      <NavHead movieDispCount={movieNum} handleCounter={setMovieNum} />
      <Container fluid>
        <Row>
          <Col md={2} xs={0} className='p-0 m-0'><Sidebar /></Col>
          <Col md={10} xs={12} className='p-0 m-0'>
            <h1 className='moviesHeading mt-3'>Movies</h1>
            <div id="moviesWrap">
              {renderByCount()}
            </div>
            <PagNavigation
              total={movieList.length}
              count={movieNum}
              active={pagActive}
              changePag={setPagActive} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
