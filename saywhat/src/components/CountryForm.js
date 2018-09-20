import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';

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
      {...this.state,post:{...this.state.post,[key]: value}}
      // [key]: value
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch('https://saywhattraslations.herokuapp.com/country',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state.post)
      })
      .then(response => response.json())
      .then(response => response.status=201 ? this.setState({gotData: true}) : console.log('Error Posting'))
      .then(setTimeout(function() {
            this.setState({gotData: false});
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

  render(){
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
        <NavLink to='/countries'>
          <div className='countries-link-on-country-form-page'>
            <Button color="primary">Back to Countries</Button>
          </div>
        </NavLink>
        <div className='country-form-container'>
          <form className='country-form' onSubmit={this.handleSubmit} >
            <div className='country-form-div'>
              <label htmlFor='countryName'>Country:</label>
              <input 
                type='text' 
                name='countryName' 
                value={this.state.post.countryName}
                onChange={this.handleChange} />
            </div>
            <div className='country-form-div'>
              <label htmlFor='currency'>Currency:</label>
              <input 
                type='text' 
                name='currency'
                value={this.state.post.currency} 
                onChange={this.handleChange} />
            </div>
            <div className='country-form-div'>
              <label htmlFor='primary_language'>Primary Language: </label>
              <input 
                type='text' 
                name='primary_language'
                value={this.state.post.primary_language} 
                onChange={this.handleChange} />
            </div>
            <div className='country-form-div'>
              <label htmlFor='siteOne'>Site: </label>
              <input 
                type='text' 
                name='siteOne'
                value={this.state.post.siteOne} 
                onChange={this.handleChange} />
            </div>
            <div className='country-form-div'>
              <label htmlFor='siteTwo'>Site: </label>
              <input 
                type='text' 
                name='siteTwo'
                value={this.state.post.siteTwo} 
                onChange={this.handleChange} />
            </div>
            <div className='country-form-div'>
              <label htmlFor='siteThree'>Site: </label>
              <input 
                type='text' 
                name='siteThree'
                value={this.state.post.siteThree} 
                onChange={this.handleChange} />
            </div>
            <div className='country-form-div'>
              <label htmlFor='wiki_url'>Wikipedia page: </label>
              <input 
                type='text' 
                name='wiki_url'
                value={this.state.post.wiki_url} 
                onChange={this.handleChange} />
            </div>
            <div className='country-form-submit-button'>
              <Button color="success" 
                      type='submit' 
                      name='submit' 
                      value='Add Country'>Add Country</Button>
            </div>
            <div className='reset-button'>
              <Button color="secondary" onClick={this.resetForm}>Reset Form</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CountryForm

