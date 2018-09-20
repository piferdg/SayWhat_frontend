import React from 'react'
import { Button } from 'reactstrap';

const Country = (props) => {
  return (
    <div className='country-info'>
      <h2>{props.countryName}</h2>
      <p>Currency: {props.countryCurrency}</p>
      <p>Primary Language: {props.countryLanguage}</p>
      <p>Site to visit: {props.siteOne}</p>
      <a href={props.wiki_url} target="_blank">Visit {props.countryName}'s wikipedia page</a>
      <div className='delete-country-button'>
        <Button color="danger" onClick={(event) => props.deleteCountry(event, props.countryId)}>DELETE</Button>
        {/* <button onClick={(event) => props.deleteCountry(event, props.countryId)}>DELETE</button> */}
      </div>
    </div>
  )
}

export default Country