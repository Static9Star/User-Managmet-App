import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';
import UserModal from './UserModal';
import UserEditModal from './UserEditModal';

const Fetch = () => {
  const json_url = 'https://jsonplaceholder.typicode.com/users';
  
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', username: '', website: '' });
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    street: '',
    city: '',
    companyName: '',
    website: ''
  });

  useEffect(() => {
    axios.get(json_url)
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`${json_url}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        alert(`User with ID ${id} deleted successfully`);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      username: user.username || '',
      website: user.website || '',
      company: user.company, // Handle missing company data
      address: `${user?.address?.street || 'N/A'}, ${user?.address?.city || 'N/A'}` // Safely access street and city
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    if (editingUser) {
      axios.put(`${json_url}/${editingUser}`, formData)
        .then(response => {
          setUsers(users.map(user => (user.id === editingUser ? response.data : user)));
          setEditingUser(null);
          alert('User updated successfully');
        })
        .catch(error => console.error('Error updating user:', error));
    }
  };

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleCreateUser = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const newUser = {
      ...newUserData,
      address: {
        street: newUserData.street,
        city: newUserData.city
      },
      company: {
        name: newUserData.companyName
      }
    };

    axios.post(json_url, newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUserData({
          name: '',
          email: '',
          phone: '',
          username: '',
          street: '',
          city: '',
          companyName: '',
          website: ''
        });
        alert('New User created successfully');
      })
      .catch(error => console.error('Error creating User:', error));
  };

  return (
    <>
      <UserModal
        newUserData={newUserData}
        handleNewUserInputChange={handleNewUserInputChange}
        handleCreateUser={handleCreateUser}
      />
      <UserEditModal
        editingUser={editingUser}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSaveClick={handleSaveClick}
      />
      <UserTable
        users={users}
        handleEditClick={handleEditClick}
        deleteUser={deleteUser}
      />
    </>
  );
};

export default Fetch;