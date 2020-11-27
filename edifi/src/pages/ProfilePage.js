import AppNavBar from '../components/AppNavbar';
import profilePic from '../resources/55.jpg';
import { Button } from 'reactstrap';
import { useSelector } from "react-redux";
import OppurtunityListing from '../components/OpportunityListing';

import '../styles/profilePageStyles.css';


function ProfilePage() {
  const reduxState = useSelector(state => state.user);

  return (
    <div className="Profile-page">
      <AppNavBar />
      {/* Might want to move these subsections into their own components later, once we have user objects*/}
      <div className="Profile-card">
        <img src={profilePic} className="Profile-picture" alt="profilePic" />
        <div className="Profile-innertext">
          <h1 className="Name-text">{reduxState.userSchool}</h1>
          <p className="School-text">{reduxState.userSchool}</p>
          <p>{reduxState.userDescription}</p>
        </div>
      </div>

      
      <div className="Opportunities-text">
        OPPORTUNITES OPEN FOR VOLUNTEERS
      </div>

      {/* Dynamically creates listing components from the available opportunities */}
      {reduxState.oppurtunities.map(opportunity => (
          <OppurtunityListing opportunity={opportunity} key={opportunity} />
        ))}

     
    </div>
  );
}

export default ProfilePage;
