import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import LanguageList from './LanguageList';

class Translate extends Component {
  
  state = {
    sentence: '',
    translatedSentence: '',
    targetLanguage: '',
    allLanguages: []
  }

//Put my API that I create for the languages here!!
  componentDidMount() {
    fetch('https://saywhattraslations.herokuapp.com/languages')
    .then(response => response.json())
    .then(languageData => {
      console.log('Languages', languageData)
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
      // console.log("Translation Info", translationData)
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
    return (
      <div className='translation-page'>
        <NavLink to='/'>
          <div className='homepage-link-on-translations-page'>
            <button>Home</button>
          </div>
        </NavLink>
        <div className='translation-form'>
          <form onSubmit={this.handleSubmit}>
            <h3>Enter a sentence you need to translate</h3>
            <label>Sentence    </label>
            <textarea id="sentence"
              rows='1'
              cols='50'
              type="text"
              value={this.state.sentence}
              onChange={this.handleChange}
              name='sentence' />
            <label>Language    </label>
            <input id="language"
              type="text"
              value={this.state.targetLanguage}
              onChange={this.handleChange}
              name='targetLanguage' />
            <button type="submit">Submit</button>
          </form>
          <h4>Translation: {this.state.translatedSentence}</h4>
          <button onClick={this.resetForm}>Reset Form</button>
          <LanguageList allLanguages={this.state.allLanguages}/>
        </div>
      </div>
    )
  }

}

export default Translate;