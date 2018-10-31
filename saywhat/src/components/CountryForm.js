import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Alert } from 'reactstrap';

class CountryForm extends Component {

  state = {
    post: {
      countryName: '',
      currency: '',
      primary_language: '',
      siteOne: '',
      siteTwo: '',
      siteThree: '',
      wiki_url: '',
    },
    gotData: false
  }

  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value

    this.setState(
      { ...this.state, post: { ...this.state.post, [key]: value } }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://saywhattraslations.herokuapp.com/country', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state.post)
    })
      .then(response => response.json())
      .then(response => response.status = 201 ? this.setState({ gotData: true }) : console.log('Error Posting'))
      .then(setTimeout(function () {
        this.setState({ gotData: false });
      }.bind(this), 5000
      ))

    event.target.reset()
  }

  resetForm = (event) => {
    event.preventDefault()
    this.setState({
      post: {
        countryName: '',
        currency: '',
        primary_language: '',
        siteOne: '',
        siteTwo: '',
        siteThree: '',
        wiki_url: ''
      }
    })
  }

  render() {
    return (
      <div className='add-country-page'>
        {this.state.gotData
          ?
          <Alert color="success">
            Your country has been added!
          </Alert>
          :
          null
        }
        <div className='back-to-countries-navlink'>
          <NavLink to='/countries'>
            <div className='countries-link-on-country-form-page'>
              <Button className='back-to-countries-button' color="primary">Back to Countries</Button>
            </div>
          </NavLink>
        </div>
        <h1>Add Country</h1>
        <div className='country-form-container'>
          <form className='country-form' onSubmit={this.handleSubmit} >
            <label htmlFor='countryName'>Country</label>
            <input
              type='text'
              name='countryName'
              value={this.state.post.countryName}
              onChange={this.handleChange}
              placeholder="Country name..." />
            <label htmlFor='currency'>Currency</label>
            <input
              type='text'
              name='currency'
              value={this.state.post.currency}
              onChange={this.handleChange}
              placeholder="Currency..." />
            <label htmlFor='primary_language'>Primary Language</label>
            <input
              type='text'
              name='primary_language'
              value={this.state.post.primary_language}
              onChange={this.handleChange}
              placeholder="Language..." />
            <label htmlFor='siteOne'>Site One</label>
            <input
              type='text'
              name='siteOne'
              value={this.state.post.siteOne}
              onChange={this.handleChange}
              placeholder="Site.." />
            <label htmlFor='siteTwo'>Site Two</label>
            <input
              type='text'
              name='siteTwo'
              value={this.state.post.siteTwo}
              onChange={this.handleChange}
              placeholder="Site..." />
            <label htmlFor='siteThree'>Site Three</label>
            <input
              type='text'
              name='siteThree'
              value={this.state.post.siteThree}
              onChange={this.handleChange}
              placeholder="Site..." />
            <label htmlFor='wiki_url'>Wikipedia page</label>
            <input
              type='text'
              name='wiki_url'
              value={this.state.post.wiki_url}
              onChange={this.handleChange}
              placeholder="wikipedia page..." />
            <div className='country-form-submit-button'>
              <Button className='new-country-button' 
                color="success"
                type='submit'
                name='submit'
                value='Add Country'>Add Country</Button>
            </div>
            <div className='reset-button'>
              <Button className='reset-form-button' color="secondary" onClick={this.resetForm}>Reset Form</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CountryForm

