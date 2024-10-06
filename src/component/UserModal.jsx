import React from 'react';

const UserModal = ({ newUserData, handleNewUserInputChange, handleCreateUser }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id='addnew'
      >
        Add User <i className="bi bi-plus-lg fw-bolder"></i>
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-primary">
            <div className="modal-header">
              <h1 className="modal-title text-light fs-4 fw-bolder" id="exampleModalLabel">Ad<u>d New Us</u>er</h1>
              <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form className="row g-3" onSubmit={handleCreateUser}>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-bolder text-light">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={newUserData.name} onChange={handleNewUserInputChange} placeholder="Name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bolder text-light">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={newUserData.email} onChange={handleNewUserInputChange} placeholder="Email" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label fw-bolder text-light">User_Name</label>
                  <input type="text" className="form-control" id="username" name="username" value={newUserData.username} onChange={handleNewUserInputChange} placeholder="User_Name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="companyName" className="form-label fw-bolder text-light">Company Name</label>
                  <input type="text" className="form-control" id="companyName" name="companyName" value={newUserData.companyName} onChange={handleNewUserInputChange} placeholder="Company Name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label fw-bolder text-light">Phone</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={newUserData.phone} onChange={handleNewUserInputChange} placeholder="Phone" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="website" className="form-label fw-bolder text-light">Website</label>
                  <input type="text" className="form-control" id="website" name="website" value={newUserData.website} onChange={handleNewUserInputChange} placeholder="Website" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="street" className="form-label fw-bolder text-light">Street</label>
                  <input type="text" className="form-control" id="street" name="street" value={newUserData.street} onChange={handleNewUserInputChange} placeholder="Street" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label fw-bolder text-light">City</label>
                  <input type="text" className="form-control" id="city" name="city" value={newUserData.city} onChange={handleNewUserInputChange} placeholder="City" required />
                </div>
                <div className='text-end'>
                    <button type="submit" className="btn btn-outline-light">Add User <i className="bi bi-plus-lg text-light fw-bolder"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;