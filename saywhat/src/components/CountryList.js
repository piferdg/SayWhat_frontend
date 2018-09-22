import React from 'react'
import Country from './Country'


const CountryList = (props) => {
    let listOfCountries = props.countries.map((country) => {
        return <Country key={country.id}
            countryId={country.id} 
            countryName={country.countryName}
            countryCurrency={country.currency}
            countryLanguage={country.primary_language}
            siteOne={country.siteOne}
            siteTwo={country.siteTwo}
            siteThree={country.siteThree}
            wiki_url={country.wiki_url}
            deleteCountry={props.deleteCountry}/>
    })

    return (
        <div className='country-container'>
            {listOfCountries}
        </div>
    )
}

export default CountryList