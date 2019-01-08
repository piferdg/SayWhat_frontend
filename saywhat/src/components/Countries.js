import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CountryList from './CountryList'
import { Button} from 'reactstrap';

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
        {/* <NavLink to='/'>
          <div className='homepage-link-on-countries-page'>
            <Button className='home-button' color="primary">Home</Button>
          </div>
        </NavLink> */}
        <NavLink to='/new-country'>
          <div className='add-country-button'>
            <Button className='new-country-button' color="success">Add a New Country</Button>
          </div>
        </NavLink>
        <div className='countries-intro-text'>
          <h2>Your Saved Countries</h2>
        </div>
        {this.state.gotData
          ? <CountryList countries={this.state.allCountries} deleteCountry={this.deleteCountry}/>
          : <h2>Loading your destinations, please hang tight!</h2>
        }
      </div>
    );
  }
}

export default Countries