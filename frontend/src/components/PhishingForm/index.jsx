import React, { useState, useEffect } from 'react';
import { createPhishingAttempt, updatePhishingAttempt, deletePhishingAttempt, } from '../../../utils/backend';
import './styles.css';

function PhishingForm() {
  const [phishingEntries, setPhishingEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    type: 'phone',
    value: '',
    description: '',
    location: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await fetch('/api/phishing');
      const data = await response.json();
      setPhishingEntries(data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntry({
      ...newEntry,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      const updatedEntries = [...phishingEntries];
      updatedEntries[editingIndex] = newEntry;
      setPhishingEntries(updatedEntries);
      setEditingIndex(null);
      updatePhishingAttempt(newEntry._id, newEntry);
    } else {
      const entry = await createPhishingAttempt(newEntry);
      setPhishingEntries([...phishingEntries, entry]);
    }
    clearForm();
  };

  const handleEdit = (index) => {
    const entryToEdit = phishingEntries[index];
    setNewEntry({ ...entryToEdit });
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const entryToDelete = phishingEntries[index];
    const response = await deletePhishingAttempt(entryToDelete._id);
    if (response.message === 'ENTRY DELETED') {
      const updatedEntries = [...phishingEntries];
      updatedEntries.splice(index, 1);
      setPhishingEntries(updatedEntries);
      setEditingIndex(null);
    }
  };

    // STORE ITEMS IN LOCAL STORAGE
    useEffect(() => {
      const storedEntries = localStorage.getItem('phishingEntries');
      if (storedEntries) {
        setPhishingEntries(JSON.parse(storedEntries));
      } else {
        fetchData();
      }
    }, []);
  
    // UPDATE LOCAL STORAGE WHENVR phishingEntries CHANGES
    useEffect(() => {
      localStorage.setItem('phishingEntries', JSON.stringify(phishingEntries));
    }, [phishingEntries]);
  

  const clearForm = () => {
    setNewEntry({
      type: 'phone',
      value: '',
      description: '',
      location: '',
    });
  };

  return (
    <div>
      <h1>Phishing Stories! Submit Yours Today!</h1>
      <div className="card-container">
        {phishingEntries.map((entry, index) => (
          <div key={index} className="card">
            <img
              src="https://media.istockphoto.com/id/1325756751/vector/hacker-cyber-criminal-with-laptop-stealing-user-personal-data-hacker-attack-and-web-security.jpg?s=612x612&w=0&k=20&c=f36goHUkOw5iaN-sun02MEWniCG41ue83YJSix1bQ3w="
              alt="Common Image"
            />
            <strong>Type:</strong> {entry.type},{' '}
            <strong>Value:</strong> {entry.value},{' '}
            <strong>Description:</strong> {entry.description},{' '}
            <strong>Location:</strong> {entry.location},{' '}
            <button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Type:
            <select
              name="type"
              value={newEntry.type}
              onChange={handleInputChange}
              className="custom-input"
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone Number or Email:
            <input
              type={newEntry.type === 'phone' ? 'tel' : 'email'}
              name="value"
              value={newEntry.value}
              onChange={handleInputChange}
              required
              className="custom-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Description:
            <textarea
              name="description"
              value={newEntry.description}
              onChange={handleInputChange}
              required
              className="custom-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={newEntry.location}
              onChange={handleInputChange}
              required
              className="custom-input"
            />
          </label>
        </div>
        <div>
          <button type="submit">
            {editingIndex !== null ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PhishingForm;
