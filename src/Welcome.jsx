import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const users=useNavigate();
    
  return (
    <div className="center-div text-end">
        <p className='text-light text-center display-1'>Welcome</p>
        <p className='text-light text-center fs-1'>User Managment System</p>
        <button className='btn btn-outline-light text-end' onClick={()=>users('/users')}>View Users List  <i class="bi bi-arrow-right"></i></button>
            <br />
        <small className='text-secondary'>~ Dhruv</small>
    </div>
  )
}

export default Welcome