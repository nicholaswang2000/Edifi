import { Button } from 'reactstrap';
import profilePic1 from '../resources/48.jpg';
import profilePic2 from '../resources/57.jpg';
import profilePic3 from '../resources/87.jpg';

function ResultListing(props) {

    function imagePicker(image) {
        switch (image) {
            case '48.jpg':
                return profilePic1
            case '57.jpg':
                return profilePic2
            case '87.jpg':
                return profilePic3
        }
    }

  return (
        <div className="Result-card">
            <img src={imagePicker(props.listing.photo)} className="Result-picture" alt="profilePic" />
            <div className="Result-innertext">
                <p className="Result-name">{props.listing.profName}</p>
                <p className="Result-title">{props.listing.profTitle}</p>
            </div>

            <div className="Vertical-line"></div>

            <div className="Result-description">
                <p>{props.listing.activityTitle}</p>
            </div>

            <Button className="Profile-button" color="primary">
                <p className="Profile-buttontext">Profile</p>
            </Button>
        </div>
    );
}

export default ResultListing;