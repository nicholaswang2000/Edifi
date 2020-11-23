import { Button } from 'reactstrap';

import '../styles/profilePageStyles.css';

function OppurtunityListing(props) {
  console.log(props)
  console.log(props.opportunity.title)
  return (
        <div className="Listing">      
          <div className="Listing-innertext">
            <h1 className="Name-text">{props.opportunity.title}</h1>
            <p>{props.opportunity.description}</p>
          </div>
          <Button className="Contact-button" color="primary">
            <p className="Contact-buttontext">Contact</p>
          </Button>
        </div>
  );
}

export default OppurtunityListing;