import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Badge } from 'react-bootstrap';
import { render } from 'react-dom';
import { generatePath } from 'react-router-dom';


import './sidebar.css';

function Sidebar({ movies, setFilteredList, setGenre, setPagActive }) {
  // this component is implemented using a 3rd party package called react-bootstrap-sidebar-menu I was too lazy to code one

  function getAllGenres() {
    //this function is redundant because of the allGenres state but i coded this before I thought of implementing genres
    let uniqueGenres = [];
    movies.forEach(movie => {
      movie.genres.map((g) => !uniqueGenres.includes(g) ? uniqueGenres.push(g) : null);
    });
    return uniqueGenres.sort();
  }

  function getBadgeNumber(genre) {
    //get genre head count so it can be displayed in a nice badge next to the sidebar item
    let moviesByGenres = movies.filter((movie) => movie.genres.includes(genre));
    return moviesByGenres.length;
  }

  function getMoviesByGenre(genre) {
    //query a movie by its genre
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
          onClick={() => { setGenre(g); setPagActive(1); return getMoviesByGenre(g); }}>
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
