import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

// Serves as the temporary home screen to make navigation in development easier
function NavigationPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Edifi!
        </p>

        
        <Link to='Login'>
          <Button> Login/Sign Page</Button>
        </Link>
        
        <Link to='Profile'>
          <Button> Mock Profile Page</Button>
        </Link>

        <Link to='Search'>
          <Button> Search/Filter Page</Button>
        </Link>
      </header>
    </div>
  );
}

export default NavigationPage;
