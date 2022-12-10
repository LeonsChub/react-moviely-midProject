import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Badge } from 'react-bootstrap';
import { render } from 'react-dom';
import { generatePath } from 'react-router-dom';


import './sidebar.css';

function Sidebar({ movies, setFilteredList, setGenre }) {

  function getAllGenres() {
    let uniqueGenres = [];
    movies.forEach(movie => {
      movie.genres.map((g) => !uniqueGenres.includes(g) ? uniqueGenres.push(g) : null);
    });
    return uniqueGenres.sort();
  }

  function getBadgeNumber(genre) {
    let moviesByGenres = movies.filter((movie) => movie.genres.includes(genre));
    return moviesByGenres.length;
  }

  function getMoviesByGenre(genre) {
    let moviesByGenres = movies.filter((movie) => movie.genres.includes(genre));
    setFilteredList(moviesByGenres)
  }

  function renderAllMenuItems() {
    let sidebarItems;
    sidebarItems = genres.map((g) => {
      return (
        <SidebarMenu.Nav
          key={g}
          className="sidebarLink"
          onClick={() => { setGenre(g); return getMoviesByGenre(g) }}>
          <SidebarMenu.Nav.Title>
            <span className="d-flex align-items-center">
              <h6>{g}</h6>
              <Badge pill className='mx-2' bg="light" text="dark">
                {getBadgeNumber(g)}
              </Badge>
            </span>
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav>)
    });
    return sidebarItems;
  }

  let genres = getAllGenres();

  return (
    <SidebarMenu bg='dark' className='p-0 m-0' id="sidebar">
      <div>
        <SidebarMenu.Body>
          {renderAllMenuItems()}
          <SidebarMenu.Nav />
        </SidebarMenu.Body>
      </div>
    </SidebarMenu>
  );
}

export default Sidebar;
