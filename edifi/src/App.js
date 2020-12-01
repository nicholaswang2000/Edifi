import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import NavigationPage from './pages/NavigationPage'
import Login from './pages/login/login'

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
              <Route path="/Login" exact component={Login} />
              <Route path="/Profile" exact component={ProfilePage} />
              <Route path="/Search" exact component={SearchPage} />
            </Switch>
      </Router>
    </Provider>
  );
}

export default App;
