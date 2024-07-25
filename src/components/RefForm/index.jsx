import React, { useRef, useState } from 'react';

function RefForm() {
  const formData = useRef({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    address: '',
    month: '',
    day: '',
    year: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    month: false,
    day: false,
    year: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, month, day, year } = formData.current;
    const errors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === '',
      email: !validateEmail(email),
      month: month.trim() === '',
      day: day.trim() === '',
      year: year.trim() === '',
    };
    setFormErrors(errors);

    if (Object.values(errors).every((error) => !error)) {
      console.log(formData.current);
      resetForm();
    } else {
      // Focus on the first invalid input
      Object.keys(errors).some((key) => {
        if (errors[key]) {
          document.getElementById(key).focus();
          return true;
        }
        return false;
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formData.current[name] = value;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const resetForm = () => {
    formData.current = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      address: '',
      month: '',
      day: '',
      year: '',
    };
    setFormErrors({
      firstName: false,
      lastName: false,
      email: false,
      month: false,
      day: false,
      year: false,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>Online Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.current.firstName}
            onChange={handleInputChange}
            style={{
              outline: formErrors.firstName ? '2px solid red' : 'none',
              border: formErrors.firstName ? '2px solid red' : '',
            }}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.current.lastName}
            onChange={handleInputChange}
            style={{
              outline: formErrors.lastName ? '2px solid red' : 'none',
              border: formErrors.lastName ? '2px solid red' : '',
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.current.email}
            onChange={handleInputChange}
            style={{
              outline: formErrors.email ? '2px solid red' : 'none',
              border: formErrors.email ? '2px solid red' : '',
            }}
          />
        </div>
        <div>
          <label htmlFor="company">Company (if applicable):</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.current.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Physical Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.current.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <div>
            <select
              id="month"
              name="month"
              value={formData.current.month}
              onChange={handleInputChange}
              style={{
                outline: formErrors.month ? '2px solid red' : 'none',
                border: formErrors.month ? '2px solid red' : '',
              }}
            >
              <option value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              id="day"
              name="day"
              value={formData.current.day}
              onChange={handleInputChange}
              style={{
                outline: formErrors.day ? '2px solid red' : 'none',
                border: formErrors.day ? '2px solid red' : '',
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select
              id="year"
              name="year"
              value={formData.current.year}
              onChange={handleInputChange}
              style={{
                outline: formErrors.year ? '2px solid red' : 'none',
                border: formErrors.year ? '2px solid red' : '',
              }}
            >
              <option value="1990">1990</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RefForm;