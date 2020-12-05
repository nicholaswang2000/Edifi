import React, { useState } from 'react';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../styles/profilePageStyles.css';

function FilterModal(props) {

  const [subjectPos, setSubjectPos] = useState({"color": ["secondary", "secondary", "primary"],
                                                "outline": [true, true, false]});
  const [distancePos, setDistancePos] = useState({"color": ["secondary", "primary", "secondary",],
                                                  "outline": [true, false, true,]});
  const [aLevelPos, setALevelPos] = useState({"color": ["secondary", "secondary", "primary"],
                                              "outline": [true, true, false]});

  const toggleButtons = (pos, stateFunc) => {
      switch (pos) {
        case 1:
          return stateFunc({"color": ["primary", "secondary", "secondary"],
                            "outline": [false, true, true]});
        case 2:
          return stateFunc({"color": ["secondary", "primary", "secondary"],
                            "outline": [true, false, true]});
        case 3:
          return stateFunc({"color": ["secondary", "secondary", "primary"],
                            "outline": [true, true, false]});
      }
    }


  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>Give us an idea of what you're looking for</ModalHeader>
    <ModalBody>

      <div className="Filter-row">
      <h3>Subject:</h3>
        <ButtonGroup>
        
          <Button outline={subjectPos["outline"][0]} color={subjectPos["color"][0]} onClick={() => toggleButtons(1, setSubjectPos)}>Biomedical</Button>
          <Button outline={subjectPos["outline"][1]} color={subjectPos["color"][1]} onClick={() => toggleButtons(2, setSubjectPos)}>Engineering</Button> 
          <Button outline={subjectPos["outline"][2]} color={subjectPos["color"][2]} onClick={() => toggleButtons(3, setSubjectPos)}>Computer Science</Button>
        </ ButtonGroup>
      </div>

      <div className="Filter-row">
        <h3>Distance:</h3>
      <ButtonGroup>
        <Button outline={distancePos["outline"][0]} color={distancePos["color"][0]} onClick={() => toggleButtons(1, setDistancePos)}>10 miles</Button>
        <Button outline={distancePos["outline"][1]} color={distancePos["color"][1]} onClick={() => toggleButtons(2, setDistancePos)}>25 miles</Button>
        <Button outline={distancePos["outline"][2]} color={distancePos["color"][2]} onClick={() => toggleButtons(3, setDistancePos)}>100 miles</Button>
        </ ButtonGroup>
      </div>

      <div className="Filter-row">
        <h3>Academic Level:</h3>
      <ButtonGroup>
        <Button outline={aLevelPos["outline"][0]} color={aLevelPos["color"][0]} onClick={() => toggleButtons(1, setALevelPos)}>Elementary School</Button>
        <Button outline={aLevelPos["outline"][1]} color={aLevelPos["color"][1]} onClick={() => toggleButtons(2, setALevelPos)}>Middle School</Button>
        <Button outline={aLevelPos["outline"][2]} color={aLevelPos["color"][2]} onClick={() => toggleButtons(3, setALevelPos)}>High School</Button>
      </ ButtonGroup>
      </div>
      
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={props.toggle}>Save Filters</Button>
    </ModalFooter>
  </Modal>
  );
}



export default FilterModal;