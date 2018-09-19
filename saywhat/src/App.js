import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Switch } from "react-router-dom"
//import Header from './components/Header'
//import Footer from './components/Footer'
import Home from './components/Home'
import Translate from './components/Translate'
import Countries from './components/Countries'
// import LanguageList from './components/LanguageList'
// import Language from './components/Language'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/translate' component={Translate} exact />
            <Route path='/countries' component={Countries} exact />
            {/* <Route path='/foodstuff/update/:id' component={Update} />
            <Route path='/foodstuff/:id' component={FoodItem} />
            <Route path='/create' component={Form} exact /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import './App.css';
// import LanguageList from './components/LanguageList';
// import About from './components/AboutMe'

// class App extends Component {
  
//   state = {
//     sentence: '',
//     translatedSentence: '',
//     targetLanguage: '',
//     allLanguages: []
//   }

// //Put my API that I create for the languages here!!
// /////////////////////////////////////////////////////

//   // componentDidMount() {
//   //   fetch(languageAPI)
//   //   .then(response => response.json())
//   //   .then(languageData => {
//   //     // console.log('Languages', languageData)
//   //     this.setState({
//   //       allLanguages: languageData.data.languages
//   //     })
//   //   })
//   // }

// //////////////////////////////////////////////////////

  
//   handleChange = (event) => {
//     event.preventDefault()
//     const key = event.target.name
//     const value = event.target.value
    
//     this.setState({
//       [key]: value
//     })
    
//   }
  
//   handleSubmit = (event) => {
//     event.preventDefault()
//     fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyDBTFIs-1oGkj5MfK7y_yuu5umZGAWTWcM&q=${this.state.sentence}&target=${this.state.targetLanguage}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(this.state)
//     })
//     .then(response => response.json())
//     .then(translationData => {
//       // console.log("Translation Info", translationData)
//       this.setState({
//         translatedSentence: translationData.data.translations[0].translatedText
//       })
//     })
//   }

//   resetForm = (event) => {
//     event.preventDefault()
//     this.setState({
//       sentence: '',
//       translatedSentence: '',
//       targetLanguage: '',
//     })
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <h3>Enter a sentence you need to translate</h3>
//             <label>Sentence    </label>
//             <textarea id="sentence"
//               rows='1'
//               cols='50'
//               type="text"
//               value={this.state.sentence}
//               onChange={this.handleChange}
//               name='sentence' />
//             <label>Language    </label>
//             <input id="language"
//               type="text"
//               value={this.state.targetLanguage}
//               onChange={this.handleChange}
//               name='targetLanguage' />
//             <button type="submit">Submit</button>
//           </form>
//           <h4>Translation: {this.state.translatedSentence}</h4>
//           <button onClick={this.resetForm}>Reset Form</button>
//           <LanguageList allLanguages={this.state.allLanguages}/>
//         </div>
//       </Router>
//     )
//   }

// }

// export default App;

