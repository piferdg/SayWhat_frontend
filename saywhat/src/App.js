import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home'
import Translate from './components/Translate'
import Countries from './components/Countries'
import CountryForm from './components/CountryForm'
import Footer from './components/Footer'
import UpdateCountry from './components/UpdateCountry'
import Navigation from './components/Navigation'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className='app'>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/translate' component={Translate} exact />
            <Route path='/countries' component={Countries} exact />
            <Route path='/country/update/:id' component={UpdateCountry} />
            <Route path='/new-country' component={CountryForm} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;

