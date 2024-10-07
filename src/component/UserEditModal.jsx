import React from 'react';

const UserEditModal = ({ editingUser, formData, handleInputChange, handleSaveClick }) => {
  return (
    <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-warning">
          <div className="modal-header">
            <h1 className="modal-title text-light fs-3 fw-bolder" id="exampleModalLabel">Edit User</h1>
            <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {editingUser && (
              <form className="row g-3" onSubmit={(e) => { e.preventDefault(); handleSaveClick(); }}>
              <div className="col-12">
                <label htmlFor="name" className="form-label fs-5 fw-bolder text-light">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fs-5 fw-bolder text-light">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="number" className="form-label fs-5 fw-bolder text-light">Phone No</label>
                <input type="text" className="form-control" id="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone No" />
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label fs-5 fw-bolder text-light">User_Name</label>
                <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleInputChange} placeholder="User_Name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="website" className="form-label fs-5 fw-bolder text-light">Website</label>
                <input type="text" className="form-control" id="website" name="website" value={formData.website} onChange={handleInputChange} placeholder="Website" />
              </div>
            <div className='text-end'>
                    <button type="submit" className="btn btn-outline-light">Update & Save</button>
            </div>
              
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditModal;