import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import '../styles/profilePageStyles.css';

function FilterModal(props) {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>Give us an idea of what you're looking for</ModalHeader>
    <ModalBody>

      <div className="Filter-row">
      <h3>Subject:</h3>
        <ButtonGroup>
        
          <Button outline>Biomedical</Button>
          <Button outline>Engineering</Button>
          <Button color="primary">Computer Science</Button>
        </ ButtonGroup>
      </div>

      <div className="Filter-row">
        <h3>Distance:</h3>
      <ButtonGroup>
        <Button color="primary">10 miles</Button>
        <Button outline>25 miles</Button>
        <Button outline>100 miles</Button>
        </ ButtonGroup>
      </div>

      <div className="Filter-row">
        <h3>Academic Level:</h3>
      <ButtonGroup>
        <Button outline>Elementary School</Button>
        <Button outline>Middle School</Button>
        <Button color="primary">High School</Button>
      </ ButtonGroup>
      </div>
      
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggle}>Do Something</Button>
      <Button color="secondary" onClick={props.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
  );
}

export default FilterModal;