import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CountryList from './CountryList'

class Countries extends Component {

  state = {
   allCountries: [],
   countryName: ''
  }

  componentDidMount() {
    fetch('https://saywhattraslations.herokuapp.com/countries')
    .then(response => response.json())
    .then(countryData => {
      console.log('Countries', countryData)
      this.setState({
        allCountries: countryData.countries
      })
    })
  }
  
  render() {
    return (
      <div className='countries-page'>
        <NavLink to='/'>
          <div className='homepage-link-on-countries-page'>
            <h3>Home</h3>
          </div>
        </NavLink>
        <h2>This is the Countries Component</h2>
        <CountryList countries={this.state.allCountries}/>
      </div>
    );
  }
}

export default Countries