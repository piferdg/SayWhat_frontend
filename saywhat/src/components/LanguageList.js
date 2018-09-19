import React from 'react'
import Language from './Language'


const LanguageList = ({ allLanguages }) => {
    let listOfLanguages = allLanguages.map((language) => {
        return <Language key={language.id}
            languageName={language.language} />
    })

    return (
        <div className='language-container'>
            {listOfLanguages}
        </div>
    )
}

export default LanguageList