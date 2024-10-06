import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom'; // Import useParams and useLocation
import axios from 'axios';

const UserDetails = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const location = useLocation(); // Get state passed through navigation
  const [user, setUser] = useState(location.state?.user || null); // Get user from state if available
  const back=useNavigate();

  useEffect(() => {
    if (!user) {
      // If no user in state, fetch from API
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => setUser(response.data))
        .catch(error => console.log(error));
    }
  }, [id, user]);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (


<div className="container">
  <div className="shadow-sm py-3 my-5" style={{
    position: 'absolute',
    width: '90%',
    maxWidth: '35rem',
    height: 'clamp(30vh, 75%, 75vh)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'rgba(57,0,0,0.7)',
    borderRadius: '0px 100px 0px 100px'
  }}>
    <div className="card-body">
      <ul className='text-light'>
        <li className="list-group-item">
          <p className='display-5 fw-bolder'>{user.name}</p>
        </li>
        <li className="list-group-item d-flex">
          <strong>
            <i className="bi bi-envelope-fill fs-3 pe-3"></i>
          </strong>
          <p className='fs-6 lh-lg d-flex align-items-end'>{user.email}</p>
        </li>
        <li className="list-group-item d-flex">
          <strong>
            <i className="fs-3 pe-3 bi bi-telephone-fill"></i>
          </strong>
          <p className='fs-6 lh-lg d-flex align-items-end'>{user.phone}</p>
        </li>
        <li className="list-group-item d-flex">
          <strong>
            <i className="fs-3 pe-3 bi bi-person-circle"></i>
          </strong>
          <p className='fs-6 lh-lg d-flex align-items-end'>{user.username}</p>
        </li>
        <li className="list-group-item d-flex">
          <strong>
            <i className="fs-3 pe-3 bi bi-globe2"></i>
          </strong>
          <p className='fs-6 lh-lg d-flex align-items-end'>{user.website}</p>
        </li>
        <li className="list-group-item d-flex">
          <strong>
            <i className="fs-3 pe-3 bi bi-geo-alt-fill"></i>
          </strong>
          <p className='fs-6 lh-lg d-flex align-items-end'>{`${user.address.street} , ${user.address.city}`}</p>
        </li>
        <li className="list-group-item d-flex">
          <strong>
            <i className="fs-3 pe-3 bi bi-buildings-fill"></i>
          </strong>
          <p className='fs-6 lh-lg d-flex align-items-end'>{user.company?.name}</p>
        </li>
      </ul>
      <button 
        className='mx-5 btn btn-outline-light text-end' 
        style={{ position: 'absolute', right: '0%', bottom: '10%' }} 
        onClick={() => back(-1)}>
        <i className="fs-5 px-3 bi bi-arrow-left"></i>
      </button>
    </div>
  </div>
</div>



  );
};

export default UserDetails;
