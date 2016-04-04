import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, ListGroup, Row } from 'react-bootstrap';

import { styles } from './styles.scss';

export class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Star Wars Directory</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#/people/">People</NavItem>
            <NavItem href="#/films/">Films</NavItem>
            <NavItem href="#/planets/">Planets</NavItem>
            <NavItem href="#/species/">Species</NavItem>
            <NavItem href="#/starships/">Starships</NavItem>
            <NavItem href="#/vehicles/">Vehicles</NavItem>
            <NavItem href="#/analytics/">Analytics</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}
