import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import banner from '../images/home/Banner2.jpg';

class Navigation extends Component {
  render() {
    return (
      <div className="header-container">
      <header>
        <img className="img header-img" id="logo-main" src={banner} alt="Simply You"></img>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <a>Simply You</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={1} title="Home Decor" id="basic-nav-dropdown">
                <LinkContainer to="/interiors">
                  <MenuItem eventKey={1.1}>Interiors</MenuItem>
                </LinkContainer>
                <LinkContainer to="/signs">
                  <MenuItem eventKey={1.2}>Custom Metal Signs</MenuItem>
                </LinkContainer>
                <LinkContainer to="/seasonal">
                  <MenuItem eventKey={1.3}>Seasonal</MenuItem>
                </LinkContainer>
                <LinkContainer to="/gifts">
                  <MenuItem eventKey={1.4}>Gift Ideas</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown eventKey={2} title="Salon" id="basic-nav-dropdown">
                <LinkContainer to="/services">
                  <MenuItem eventKey={2.1}>Services</MenuItem>
                </LinkContainer>
                <LinkContainer to="/team">
                  <MenuItem eventKey={2.2}>Team Members</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/boutique">
                <NavItem eventKey={3}>Boutique</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/contact">
                <NavItem eventKey={1}>Contact Us</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
    );
  }
}

export default Navigation;
