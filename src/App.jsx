import React from 'react';
import Fetch from './component/Fetch';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import UserDetails from './UserDetails';
import NotFound from './NotFound';

const App = () => {

  return (
    <>
        <Router>
          <Switch>
            <Route path='/' element={<Welcome />} />
            <Route path='users' element={<Fetch />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path='*' element={<NotFound />} />
          </Switch>
        </Router>
        
        
    </>
  );
};

export default App;