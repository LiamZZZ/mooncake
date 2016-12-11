import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';

const AppNavigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">LittleMooncake English</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <PublicNavigation />
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavigation;
