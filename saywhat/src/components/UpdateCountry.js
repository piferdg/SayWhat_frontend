import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';

class UpdateCountry extends Component {

  state = {
      countryName: '',
      currency: '',
      primary_language: '',
      siteOne: '',
      siteTwo: '',
      siteThree: '',
      wiki_url: '',
  }

  componentDidMount() {
    this.parseQueryString()

    fetch(`https://saywhattraslations.herokuapp.com/countries/${this.parseQueryString()}`)
      .then(response => response.json())
      .then(countryData => {
        console.log('Countries on Update', countryData.countries)
        this.setState(
          {
            countryName: countryData.countries.countryName,
            currency: countryData.countries.currency,
            primary_language: countryData.countries.primary_language,
            siteOne: countryData.countries.siteOne,
            siteTwo: countryData.countries.siteTwo,
            siteThree: countryData.countries.siteThree,
            wiki_url: countryData.countries.wiki_url,
          }
        )
      })
  }

  parseQueryString = () => {
    let url = window.location.href
    return url.split('/')[5]
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const key = target.name

    this.setState(
      {[key]: value}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://saywhattraslations.herokuapp.com/countries/${this.parseQueryString()}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(response => response.status=201 ? console.log('Update Worked!!') : console.log('ERROR'))
  }

  render() {
    return (
      <div className='update-country-page'>
        {/* <div className='back-to-countries-navlink'>
          <NavLink to='/countries'>
            <div className='countries-link-on-country-form-page'>
              <Button className='back-to-countries-button' color="primary">Back to Countries</Button>
            </div>
          </NavLink>
        </div> */}
        <h1>Update Country</h1>
        <div className='country-update-container'>
          <form className='country-form' onSubmit={this.handleSubmit} >
            <label htmlFor='countryName'>Country</label>
            <input
              type='text'
              name='countryName'
              value={this.state.countryName}
              onChange={this.handleChange}
              placeholder="Country name..." />
            <label htmlFor='currency'>Currency</label>
            <input
              type='text'
              name='currency'
              value={this.state.currency}
              onChange={this.handleChange}
              placeholder="Currency..." />
            <label htmlFor='primary_language'>Primary Language</label>
            <input
              type='text'
              name='primary_language'
              value={this.state.primary_language}
              onChange={this.handleChange}
              placeholder="Language..." />
            <label htmlFor='siteOne'>Site One</label>
            <input
              type='text'
              name='siteOne'
              value={this.state.siteOne}
              onChange={this.handleChange}
              placeholder="Site.." />
            <label htmlFor='siteTwo'>Site Two</label>
            <input
              type='text'
              name='siteTwo'
              value={this.state.siteTwo}
              onChange={this.handleChange}
              placeholder="Site..." />
            <label htmlFor='siteThree'>Site Three</label>
            <input
              type='text'
              name='siteThree'
              value={this.state.siteThree}
              onChange={this.handleChange}
              placeholder="Site..." />
            <label htmlFor='wiki_url'>Wikipedia page</label>
            <input
              type='text'
              name='wiki_url'
              value={this.state.wiki_url}
              onChange={this.handleChange}
              placeholder="wikipedia page..." />
            <div className='update-country-form-submit-button'>
              <Button className='update-country-button'
                color="success"
                type='submit'
                name='submit'
                value='Add Country'>Update</Button>
            </div>
            <div>
              <NavLink to='/countries'>
              <div className='countries-link-on-update-page'>
                <Button className='back-to-countries-button' color="secondary">Back to Countries</Button>
              </div>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default UpdateCountry;
