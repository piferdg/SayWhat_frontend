import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Nav>
          <div className='nav-home-link'>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
          </div>
          <div className='nav-translate-link'>
            <NavItem>
              <NavLink to="/translate">Translations</NavLink>
            </NavItem>
          </div>
          <div className='nav-countries-link'>
            <NavItem>
              <NavLink to="/countries">Countries</NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>
    );
  }
}
