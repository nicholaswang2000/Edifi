import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import NavigationPage from './pages/NavigationPage'
import LoginPage from './components/login/LoginPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    //Provider allows redux to be used
    <Provider store={store}>
      
      {/*Routing is to simulate pages*/}
      <Router>
            <Switch>
              <Route path="/" exact component={NavigationPage} />
              <Route path="/Login" exact component={LoginPage} />
              <Route path="/Profile" exact component={ProfilePage} />
              <Route path="/Search" exact component={SearchPage} />
            </Switch>
      </Router>
    </Provider>
  );
}

export default App;
