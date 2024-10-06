import React from 'react';
import Fetch from './component/Fetch';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import UserDetails from './UserDetails';
import NotFound from './NotFound';

const App = () => {

  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='users' element={<Fetch />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        
        
    </>
  );
};

export default App;