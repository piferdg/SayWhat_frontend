import React, { Component } from "react";
import { Button } from "reactstrap";
import LanguageList from "./LanguageList";

class Translate extends Component {
  state = {
    sentence: "",
    translatedSentence: "",
    targetLanguage: "",
    allLanguages: [],
  };

  componentDidMount() {
    fetch("https://saywhattraslations.herokuapp.com/languages")
      .then(response => response.json())
      .then(languageData => {
        this.setState({
          allLanguages: languageData.languages
        });
      });
    }

  handleChange = event => {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDBTFIs-1oGkj5MfK7y_yuu5umZGAWTWcM&q=${
        this.state.sentence
      }&target=${this.state.targetLanguage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }
    )
      .then(response => response.json())
      .then(translationData => {
        this.setState({
          translatedSentence:
            translationData.data.translations[0].translatedText
        });
      });
  };

  resetForm = event => {
    event.preventDefault();
    this.setState({
      sentence: "",
      translatedSentence: "",
      targetLanguage: ""
    });
  };

  render() {
    const translation = this.state.translatedSentence;
    return (
      <div className="translation-page">
        <div className="translation-form-container">
          <div className="translation-form">
            <form onSubmit={this.handleSubmit}>
              <h6><u>Step 1:</u> Enter the sentence you'd like to have translated.</h6>
              <div className="sentence-to-translate">
                <textarea
                  id="sentence"
                  type="text"
                  value={this.state.sentence}
                  onChange={this.handleChange}
                  name="sentence"
                  placeholder="Enter sentence to be translated..."
                  />
              </div>
              <hr></hr>

              <h6><u>Step 2:</u> Search for the target language (language you want your sentence to be translated to) in the dropdown.</h6>
              <div className="language-dropdown">
                <LanguageList allLanguages={this.state.allLanguages} type='text' />
              </div>
              <hr></hr>

              <h6><u>Step 3:</u> After finding your target language, enter the two letter language code into the box below.</h6>
              <div className="language-code-input">
                <textarea
                  id="language"
                  rows="1"
                  cols="20"
                  type="text"
                  value={this.state.targetLanguage}
                  onChange={this.handleChange}
                  name="targetLanguage"
                  placeholder="Enter language code..."
                  />
              </div>
              <hr></hr>
                <h6><u>Step 4:</u> Click the 'Translate' button!</h6>
              <div className='translation-form-buttons'>
                <div className="submit-button">
                  <Button
                    className="translate-button"
                    color="success"
                    type="submit">Translate</Button>
                </div>
              <div className="reset-button">
                <Button
                  className="reset-form-button"
                  color="secondary"
                  onClick={this.resetForm}>Reset Form</Button>
              </div>
              
              </div>

            </form>
          </div>
        </div>
        <div className="translation">
          <h4>Translation:</h4>
          {translation ? (
            <h3>{this.state.translatedSentence}</h3>
          ) : (
            <h5>Translation will appear here...</h5>
          )}
        </div>
      </div>
    );
  }
}

export default Translate;
