import React from 'react'

const Country = (props) => {
  return (
    <div>
      <h2>{props.countryName}</h2>
      <p>{props.countryCurrency}</p>
      <p>{props.countryLanguage}</p>
      <p>{props.siteOne}</p>
      <a href={props.wiki_url} target="_blank">Visit {props.countryName}'s wikipedia page</a>
    </div>
  )
}

export default Country