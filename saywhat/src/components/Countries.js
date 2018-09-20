import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CountryList from './CountryList'

class Countries extends Component {

  state = {
   allCountries: [],
   countryName: '',
   gotData: false
  }

  componentDidMount() {
    fetch('https://saywhattraslations.herokuapp.com/countries')
    .then(response => response.json())
    .then(countryData => {
      console.log('Countries', countryData)
      this.setState({
        allCountries: countryData.countries,
        gotData: true
      })
    })
  }

  deleteCountry = (event, countryId) => {
    event.preventDefault()
    fetch('https://saywhattraslations.herokuapp.com/countries/' + countryId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const currentCountries = this.state.allCountries
    const filteredCountries = currentCountries.filter(country => {
      return country.id !== countryId
    })
    this.setState({
      allCountries: filteredCountries
    })
  }
  
  render() {
    return (
      <div className='countries-page'>
        <NavLink to='/'>
          <div className='homepage-link-on-countries-page'>
            <button>Home</button>
          </div>
        </NavLink>
        <NavLink to='/new-country'>
          <div className='add-country-button'>
            <button>Add a New Country</button>
          </div>
        </NavLink>
        <h2>This is the Countries Component</h2>
        {this.state.gotData
          ? <CountryList countries={this.state.allCountries} deleteCountry={this.deleteCountry}/>
          : <h2>Loading your destinations, please hang tight!</h2>
        }
      </div>
    );
  }
}

export default Countries