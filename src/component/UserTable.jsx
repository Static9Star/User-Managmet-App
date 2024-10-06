import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTable = ({ users, handleEditClick, deleteUser }) => {
    const navigate = useNavigate();

    // Handles the "View" button click, navigating to the user details page
    const handleViewClick = (userId) => {
        const user = users.find(user => user.id === userId);
        if (user) {
            // Navigate to /user/:id and pass the user data
            navigate(`/user/${userId}`, { state: { user } });
        }
    };

    return (
        <div className="container-fluid px-5">
            <p className='my-3 fw-bolder text-center display-5 text-light'>
                Da<u>ta List ..</u>
            </p>
            <div className="row table-responsive">
                <table className="table table-hover table-dark table-striped text-center px-5">
                    <thead>
                        <tr>
                            <th scope="col" className='fw-bolder fs-5'>Name</th>
                            <th scope="col" className='fw-bolder fs-5'>Email</th>
                            <th scope="col" className='fw-bolder fs-5'>Phone</th>
                            <th scope="col" className='fw-bolder fs-5'>User-name</th>
                            <th scope="col" className='fw-bolder fs-5'>Address</th>
                            <th scope="col" className='fw-bolder fs-5'>Company</th>
                            <th scope="col" className='fw-bolder fs-5'>Website</th>
                            <th scope='col'></th>
                            <th scope='col'></th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.username}</td>
                                <td>{`${user.address.street} , ${user.address.city}`}</td>
                                <td>{user.company?.name || 'N/A'}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button
                                        className='p-1 px-2 btn btn-outline-warning'
                                        onClick={() => handleEditClick(user)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalEdit"
                                    >
                                        <i className="bi bi-pencil-square fs-4"></i>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='p-1 px-2 btn btn-outline-danger'
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        <i className="bi bi-trash fs-4"></i>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-info"
                                        onClick={() => handleViewClick(user.id)} // Navigate to user details page
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
