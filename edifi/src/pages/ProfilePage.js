import AppNavBar from '../components/AppNavbar';
import profilePic from '../resources/55.jpg';
import { Button } from 'reactstrap';

import '../App.css';
import '../styles/profilePageStyles.css';


function ProfilePage() {
  return (
    <div className="Profile-page">
      <AppNavBar />



      {/* Might want to move these subsections into their own components later, once we have user objects*/}
      <div className="Profile-card">
        <img src={profilePic} className="Profile-picture" alt="profilePic" />
        <div className="Profile-innertext">
          <h1 className="Name-text">Brandon Wilson</h1>
          <p className="School-text">Antelope High School</p>
          <p>
            I’ve been teaching computer science at Antelope High School for 5
            years now. Teaching isn’t just an occupation, it’s a lifestyle. 
            I’ve been looking to expose my students to the oppurtunities of 
            CS after high school, should they choose to continue this path.
          </p>
        </div>
      </div>

      
      <div className="Opportunities-text">
        OPPORTUNITES OPEN FOR VOLUNTEERS
      </div>

        <div className="Listing">      
          <div className="Listing-innertext">
            <h1 className="Name-text">Looking For: Cyber Security Analyst</h1>
            <p>I teach a cyber security class.  The class mostly consists of 
               Seniors with proffiecent programming knowledge. I would love 
               for my students to see the day-to-day of a real Security Analyst.
            </p>
          </div>
          <Button className="Contact-button" color="primary">
            <p className="Contact-buttontext">Contact</p>
          </Button>
        </div>

     
    </div>
  );
}

export default ProfilePage;
