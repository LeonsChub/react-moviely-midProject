import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sidebar from '../SideBar/Sidebar'
import PagNavigation from '../PagNavigation/PagNavigation'
import MovieCard from '../MovieCard/MovieCard'

import './filterPage.css'

function FilterPage({ movieNum, movieList, rmFunc, toggleFunc, filteredList, setFilteredList }) {
    const [pagActive, setPagActive] = useState(1);


    function renderByCount() {
        const moviesDom = []
        const renderFromList = filteredList.length > 0 ? filteredList : movieList//list of movies to render from, either filtered list Prop or all movies from movieList Prop

        for (let i = (pagActive - 1) * movieNum; i < movieNum * pagActive; i++) {
            if (i >= renderFromList.length) { break; }
            moviesDom.push(
                <MovieCard
                    movie={renderFromList[i]}
                    rmFunc={rmFunc}
                    toggleFunc={toggleFunc}
                    key={renderFromList[i].id}
                />);
        }
        return moviesDom;
    }


    return (
        <Container fluid>
            <Row>
                <Col md={2} xs={0} className='p-0 m-0'>
                    <Sidebar
                        movies={movieList}
                        filteredList={filteredList}
                        setFilteredList={setFilteredList}
                    />
                </Col>
                <Col md={10} xs={12} className='p-0 m-0'>
                    <h1 className='moviesHeading mt-3'>Movies</h1>
                    <div id="moviesWrap">
                        {renderByCount()}
                    </div>
                    <PagNavigation
                        total={movieList.length}
                        count={movieNum}
                        active={pagActive}
                        changePag={setPagActive}
                        filteredList={filteredList} />
                </Col>
            </Row>
        </Container>
    )
}

export default FilterPage