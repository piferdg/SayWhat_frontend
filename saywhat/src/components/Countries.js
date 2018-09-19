import React, { Component } from 'react'
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
      <div>
        <h2>This is the Countries Component</h2>
        <CountryList countries={this.state.allCountries}/>
      </div>
    );
  }
}

export default Countries