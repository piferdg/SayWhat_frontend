import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import LanguageList from './LanguageList';

class Translate extends Component {

  state = {
    sentence: '',
    translatedSentence: '',
    targetLanguage: '',
    allLanguages: []
  }

  componentDidMount() {
    fetch('https://saywhattraslations.herokuapp.com/languages')
      .then(response => response.json())
      .then(languageData => {
        this.setState({
          allLanguages: languageData.languages
        })
      })
  }

  handleChange = (event) => {
    event.preventDefault()
    const key = event.target.name
    const value = event.target.value

    this.setState({
      [key]: value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyDBTFIs-1oGkj5MfK7y_yuu5umZGAWTWcM&q=${this.state.sentence}&target=${this.state.targetLanguage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(translationData => {
        console.log("Translation Info", translationData)
        this.setState({
          translatedSentence: translationData.data.translations[0].translatedText
        })
      })
  }

  resetForm = (event) => {
    event.preventDefault()
    this.setState({
      sentence: '',
      translatedSentence: '',
      targetLanguage: '',
    })
  }

  render() {
    const translation = this.state.translatedSentence
    return (
      <div className='translation-page'>
        <NavLink to='/'>
          <div className='homepage-link-on-translations-page'>
            <Button color="primary">Home</Button>
          </div>
        </NavLink>
        <div className='translation-form-container'>
          <div className='translation-form'>
            <form onSubmit={this.handleSubmit}>
              <h3>Enter a sentence you need to translate</h3>
              <div className='sentence-to-translate'>
                <label>Sentence    </label>
                <textarea id="sentence"
                  type="text"
                  value={this.state.sentence}
                  onChange={this.handleChange}
                  name='sentence' 
                  placeholder='Enter sentence to be translated...' />
              </div>
              <div className='language-dropdown'>
                <LanguageList allLanguages={this.state.allLanguages} onChange={this.handleChange} type='text' name='targetLanguage' value={this.state.targetLanguage} />
              </div>
              <div className='language-code-input'>
                <label>Language Code</label>
                <textarea id="language"
                  rows='1'
                  cols='20'
                  type="text"
                  value={this.state.targetLanguage}
                  onChange={this.handleChange}
                  name='targetLanguage' 
                  placeholder='Enter language code...' />
              </div>
              <div className='submit-button'>
                <Button color="success" type='submit'>Translate</Button>
              </div>
            </form>
            <div className='reset-button'>
              <Button color="secondary" onClick={this.resetForm}>Reset Form</Button>
            </div>
          </div>
        </div>
        <div className='translation'>
          <h4>Translation:</h4>
          {translation
          ? 
          <h3>{this.state.translatedSentence}</h3>
          :
          <h5>Translation will appear here...</h5>
          }
          
          </div>
      </div>
    )
  }
}

export default Translate;