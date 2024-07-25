import React, { useState } from 'react';

function FirstForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
    biography: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    username: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMessage = 'Name field can only contain letters and spaces.';
        }
        break;
      case 'email':
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          errorMessage = 'Invalid email address.';
        }
        break;
      case 'password':
        if (value.length < 8) {
          errorMessage = 'Password must be at least 8 characters long.';
        }
        break;
      case 'username':
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          errorMessage = 'Username can only contain letters, numbers, and underscores.';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: errorMessage
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      return;
    }

    console.log(formData);

    setFormData({
      name: '',
      email: '',
      password: '',
      username: '',
      biography: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Enter your full name'
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Enter your email address'
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder='Enter your username'
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Enter your password'
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <div>
        <textarea
          id="biography"
          name="biography"
          value={formData.biography}
          onChange={handleInputChange}
          placeholder='Your biography'
        />
      </div>
      <button type="submit">CREATE ACCOUNT</button>
    </form>
  );
}

export default FirstForm;