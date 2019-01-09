import React, { Component } from 'react'
import logo from '../assets/logo.png'

class Home extends Component {

  render() {
    return (
      <div className="homepage">
        <div className='home-heading-and-links'>
          <div className='logo'>
            <img src={logo} alt='saywhat logo' />
            <h4>The translation and travel app</h4>
          </div>
          <div className='brochure-information'>
            <div className='translation-info'>
              <div>
                <h5>Translations Page</h5>
              </div>
              <div>
                <p>Click the 'Translations' link in the navigation bar to translate any word, or full customized sentence into 63 different languages!</p>
              </div>
            </div>
            <div className='countries-info'>
              <div>
                <h5>Countries Page</h5>
              </div>
              <div>
                <p>Click the 'Countries' link in the navigation bar to add, edit, or delete the countries you'd like to visit, and save valuable information for each country you add! For each country you can save primary language, currency, up to three sites you'd like to remember to visit, and the wikipedia page for that country.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home