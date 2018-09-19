import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        <div className='home-heading-and-links'>
          <div className='home-heading'>
            <h1>Welcome to "SayWhat?"</h1>
          </div>
          <div className='homepage-links'>
            <NavLink to='/translate'>
              <div className='homepage-translation-link-text'>
                <h3>Translations</h3>
              </div>
            </NavLink>
            <NavLink to='/countries'>
              <div className='homepage-countries-link-text'>
                <h3>Countries</h3>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Home