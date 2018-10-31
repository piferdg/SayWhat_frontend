import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button } from 'reactstrap';

class Home extends Component {

  render() {
    return (
      <div className="homepage">
        <div className='home-heading-and-links'>
          <div className='home-heading'>
            <h1>Welcome to "SayWhat?"</h1>
            <h4>The translation and travel app</h4>
          </div>
          <div className='logo'>
            <img src={logo} alt='saywhat logo' />
          </div>
          <div className='homepage-links'>
            <NavLink to='/translate'>
              <div className='homepage-translation-link-text'>
                <Button className='translations-button-homepage' color='primary'>Translations</Button>
              </div>
            </NavLink>
            <NavLink to='/countries'>
              <div className='homepage-countries-link-text'>
                <Button className='countries-button-homepage' color='primary' >Countries</Button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Home