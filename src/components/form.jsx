import React, { useState } from 'react';
import "../App.css"
import axios from 'axios';
function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
   name: '',
   phone: '',
   password: '',
   message: ''
 });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data, like send a request to a server
    // console.log(`Name: ${name}, Phone: ${phone}, Password: ${password}, Message: ${message}`);
    try {
     await axios.post("/api/contact", formData);
     console.log('Data saved to MongoDB');
   } catch (error) {
     console.log(error);
   }
  }

  return (
    <div className="main">

    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default ContactForm;
