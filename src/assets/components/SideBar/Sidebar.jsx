import React from 'react';
// import { Nav } from 'react-bootstrap';

import { BsCart4 } from 'react-icons//bs';
import { MdClear } from 'react-icons//md';

import SidebarMenu from 'react-bootstrap-sidebar-menu';

import './sidebar.css';

function Sidebar() {
  let totalItems;

  return (
    <SidebarMenu bg='dark' className='p-0 m-0' id="sidebar">
      <div>
        <SidebarMenu.Body>

          <SidebarMenu.Nav className="sidebarLink">
            <SidebarMenu.Nav.Title>
              <h6>Action</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav>

          <SidebarMenu.Nav className="sidebarLink">
            <SidebarMenu.Nav.Title>
              <h6>Comedy</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav>

          <SidebarMenu.Nav className="sidebarLink">
            <SidebarMenu.Nav.Title>
              <h6>Drama</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav>

          <SidebarMenu.Nav className="sidebarLink">
            <SidebarMenu.Nav.Title>
              <h6>Fantasy</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav>

          <SidebarMenu.Nav className="sidebarLink">
            <SidebarMenu.Nav.Title>
              <h6>Horror</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav>

          <SidebarMenu.Nav />
        </SidebarMenu.Body>
      </div>
    </SidebarMenu>
  );
}

export default Sidebar;
