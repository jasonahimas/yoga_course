import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './EnrollmentForm.css';

const EnrollmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date);
  const [selectedBatch, setSelectedBatch] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const monthYear = `${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
      const response = await axios.post('http://localhost:8000/api/v1/users/enrollment', {
        name,
        email,
        age,
        monthYear,
        batch:selectedBatch,
      });

      console.log('Form data sent successfully', response.data);
      alert(`Form data sent successfully:\n${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      console.log('Error sending form data:', JSON.stringify(error.message));
      alert(`Form data failed successfully:\n${JSON.stringify(error.response.data.error, null, 2)}`);
    }
  };
  const today = new Date()
  return (
    <>
      <h2>Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <div className="form-group">
        <label>
          Date:
        </label>
        <DatePicker dateFormat='yyyy/MM/dd' minDate={today} selected={selectedDate} onChange={handleDateChange} />
        
        </div>
        <br />
        <div className="form-group">
        <label>
          Batch:
          
        </label>
        <select value={selectedBatch} onChange={handleBatchChange}>
            <option value="">Select Batch</option>
            <option value="6-7am">6-7 AM</option>
            <option value="7-8am">7-8 AM</option>
            <option value="8-9am">8-9 AM</option>
            <option value="5-6pm">5-6 PM</option>
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EnrollmentForm;
