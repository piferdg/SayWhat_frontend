import React from 'react'
import { Card, CardText, CardBody, CardTitle, Button, CardLink} from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Country = (props) => {
  return (
    <div className='country-info'>
      <Card>
        <CardBody>
          <CardTitle>{props.countryName}</CardTitle>
          <CardText>Currency: {props.countryCurrency}</CardText>
          <CardText>Primary Language: {props.countryLanguage}</CardText>
          <CardText>Site: {props.siteOne}</CardText>
          <CardText>Site: {props.siteTwo}</CardText>
          <CardText>Site: {props.siteThree}</CardText>
          <CardLink href={props.wiki_url} target="_blank">Wikipedia Page</CardLink>
          <div className='update-and-delete-country-buttons'>
            <NavLink to={'/country/update/' + props.countryId} className='update-button'>
              <Button color='secondary'>Update</Button>
            </NavLink>
            <Button color="danger" onClick={(event) => props.deleteCountry(event, props.countryId)}>DELETE</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Country

