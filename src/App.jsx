import { Container, Nav } from 'react-bootstrap'

import NavHead from './assets/components/Navbar/NavHead'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sidebar from './assets/components/SideBar/Sidebar'
import MovieCard from './assets/components/MovieCard/MovieCard'

import { MOVIES } from './assets/movieData'

console.log(MOVIES)

function App() {
  return (
    <div className="App">
      <NavHead />
      <Container fluid>
        <Row>
          <Col md={2} xs={0} className='p-0 m-0'><Sidebar /></Col>
          <Col md={10} xs={12} className='p-0 m-0'>
            <MovieCard movie={MOVIES[0]} />

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
