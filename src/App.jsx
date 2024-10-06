import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './UserDetails';
import Fetch from './component/Fetch';
import Welcome from './Welcome'


const App = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='users' element={<Fetch />} />
            <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;

