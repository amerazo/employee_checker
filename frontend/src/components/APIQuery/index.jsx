import React, { useState } from 'react';

// API KEY 
const apiKey = '1ba33d2676b34cb2896462560fdfe0a6';

function APIQuery() {
  // STATE VARS TO STORE EMAIL, BREACHES, && LOADING STATE
  const [email, setEmail] = useState('');
  const [breaches, setBreaches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notBreached, setNotBreached] = useState(false); 

  // FUNCTION TO CHECK FOR BREACHES
  async function checkBreach() {
    if (!email) {
      alert('Please enter an email address.');
      return;
    }

    setIsLoading(true);

    try {
      const endpoint = `/api/subscriptions/proxy?email=${email}`; 
      const response = await fetch(endpoint, {
        headers: {
          'hibp-api-key': apiKey,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setBreaches(data);
        // RESET NOTBREACHED STATE WHEN BREACHES FOUND
        setNotBreached(false); 
      } else if (response.status === 404) {
        // RESET BREACHES DATA
        setBreaches([]); 
        // SET NOTBREACHED STATE TO TRUE WHEN EMAIL NOT BREACHED
        setNotBreached(true); 
      } else {
        // THROW AN ERROR FOR UNEXPECTED RESPONSE 
        throw new Error('An error occurred while checking for breaches.'); STATUS
      }
    } catch (error) {
      console.error('Error:', error.message);
      setNotBreached(true); // SET NOTBREACHED STATE TO TRUE IN CASE OF AN ERROR
    } finally {
      setIsLoading(false);
    }
  }

  // FUNCTION TO HANDLE SUBMIT BUTTON CLICK
  function handleSubmit(e) {
    e.preventDefault();
    checkBreach();
  }

  // RENDER THE COMPONENT UI
  return (
    <div>
      <h1>Email Breach Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Check Breach
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {notBreached && <p>Email address HAS NOT been breached.</p>} {/*  NOTBREACHED MESSAGE */}
      {breaches.length > 0 && (
        <div>
          <h2>Breached in the following services:</h2>
          <ul>
            {/* MAP THROUGH THE BREACHES && DISPLAY THEM */}
            {breaches.map((breach) => (
              <li key={breach.Name}>{breach.Name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default APIQuery;
