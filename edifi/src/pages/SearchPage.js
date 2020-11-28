import React, { useState } from 'react';
import AppNavBar from '../components/AppNavbar';
import { Button } from 'reactstrap';
import profilePic from '../resources/55.jpg';

import '../styles/searchPageStyles.css';
import FilterModal from '../components/FilterModal';

function SearchPage() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <AppNavBar />
      <div className="Search-page">
        
        <h1 className="Header-text">Find Proffesionals</h1>

        <div className="Search-buttons">
          <Button className="Search-button" onClick={toggle}>Filter Settings</Button>
          <FilterModal modal={modal} toggle={toggle}/>
          <Button color="primary">Search for Proffesionals!</Button>
        </div>




        <p>There needs to be a vertical line here</ p>


        <div className="Result-card">
          <img src={profilePic} className="Result-picture" alt="profilePic" />
          <div className="Result-innertext">
            <h1 className="Result-name">Brandon Wilson</h1>
            <p className="Result-title">iOS Engineer</p>
            <p>dzfgfdsfgzsd</p>
          </div>

          <div className="Result-description">
            <p>
              I have a presentation on agile design and how it is implemented within my team.
            </p>
          </div>

          <Button className="Contact-button" color="primary">
            <p className="Contact-buttontext">Profile</p>
          </Button>
      </div>

      </div>
    </div>
  );
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

export default SearchPage;
