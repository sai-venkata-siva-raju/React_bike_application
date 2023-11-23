import React, { useState } from 'react';
import './App.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <center>
    <form onSubmit={handleSubmit} className='form'>
      <h1>Contact us</h1>
      <label><br />
        Name:<br/>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='name-label'
        />
      </label>
      <br />
      <label><br />
        Email:<br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='email-label'
        />
      </label>
      <br /><br />
      
      <button type="submit" className='button'>Submit</button>
    </form>
    <footer className='footer'>
        <center>
        <h1>Thanks For Watching</h1>
        <p>copy rights &copy; 2023</p>
        <p>Email:rideprowheels@gmail.com</p>
        </center>
      </footer>
      </center>
  );
};

export default MyForm;
