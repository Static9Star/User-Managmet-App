import React from 'react';
import Fetch from './component/Fetch';
import { Routes,Route} from 'react-router-dom';
import Welcome from './Welcome';
import UserDetails from './UserDetails';
import NotFound from './NotFound';

const App = () => {

  return (
    <>
        <Routes>

            <Route path='/' element={<Welcome />} />
            <Route path='users' element={<Fetch />} />
            {/* Route for individual user details */}
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
        
        
    </>
  );
};

export default App;