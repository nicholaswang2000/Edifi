import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import NavigationPage from './pages/NavigationPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
          <Switch>
            <Route path="/" exact component={NavigationPage} />
            <Route path="/Login" exact component={LoginPage} />
            <Route path="/Profile" exact component={ProfilePage} />
            <Route path="/Search" exact component={SearchPage} />
          </Switch>
    </Router>
  );
}

export default App;
