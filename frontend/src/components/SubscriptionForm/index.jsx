import React, { useState } from 'react';
import './styles.css'; 

const SubscriptionForm = () => {
  // STATE VAR TO STORE FORM DATA
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'awareness',
  });

  // FUNCTION TO HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // FUNCTION TO HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // SEND A POST REQUEST TO CREATE NEW SUBS
      const response = await fetch('/api/subscriptions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // CHECK IF THE REQUEST WAS SUCCESSFUL
      if (!response.ok) {
        throw new Error('Failed to create subscription');
      }
  
      // RESET THE FORM DATA AFTER SUBMISSION
      setFormData({
        name: '',
        email: '',
        reason: 'awareness',
      });
  
      // PROVIDE USER FEEDBACK 
      alert('You have been subscribed!');
    } catch (error) {
      // ERROR LOG, DEBUGGING
      console.error('Error creating sub:', error);
      alert('Failed to create sub. Please try again later.');
    }
  };
  
return (
  <div className="subscription-form-container"> 
    <h2 className="subscription-form-header">Subscribe for Monitoring</h2>
    <form onSubmit={handleSubmit}>
      <div className="subscription-form-input">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="subscription-form-input">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="subscription-form-input">
        <label htmlFor="reason">Reason: </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        >
         <option value="" selected disabled>SELECT</option> 
          <option value="awareness">Awareness</option>
          <option value="phishing">I've been phished before</option>
          <option value="department">Required by department</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="subscription-form-button">Subscribe</button>
    </form>
  </div>
);
};

export default SubscriptionForm;

