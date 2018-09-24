import React from 'react'

const Language = (props) => {
  // console.log('PROPS', props)
  return (
    <option className='language-options-container'>{props.languageName} - {props.languageCode}</option>
  )
}

export default Language

