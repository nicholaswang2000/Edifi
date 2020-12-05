import React, { useState, useEffect } from 'react';
import AppNavBar from '../components/AppNavbar';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../actions/resultActions";

import '../styles/searchPageStyles.css';
import FilterModal from '../components/FilterModal';
import ResultListing from '../components/ResultListing';


function SearchPage() {

  var reduxState = useSelector(state => state.results);
  const dispatch = useDispatch();

  //const [test, setTest] = useState(reduxState[0].profName);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const ColoredLine = ({ color }) => (
      <hr style={{
              color: color,
              backgroundColor: color,
              height: 5
          }}
      />
    );

  const searchProfessionals = () => {
    dispatch(getItems())
  }

  return (
    <div>
      <AppNavBar />
      <div className="Search-page">
        
        <h1 className="Header-text">Find Professionals</h1>
        <div className="Search-buttons">

          <Button className="Search-button" onClick={toggle}>Filter Settings</Button>
          <FilterModal modal={modal} toggle={toggle}/>
          <Button color="primary" onClick={searchProfessionals}>Search for Professionals!</Button>
          <div className="LineBar">
            <ColoredLine color="72bcd4" />
          </div>
        </div>

        
        <div className="LineBar">
          <ColoredLine color="blue" />
        </div>
        {reduxState.map(listing => (
        <ResultListing listing={listing} key={listing.profName} />
        ))}

  
      
      </div>
    </div>
  );
}


export default SearchPage;
