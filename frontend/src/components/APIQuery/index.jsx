import React, { useState } from 'react';
import './styles.css'

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
        throw new Error('ERROR OCCURED WHEN CHECKING FOR BREACHESS.'); STATUS
      }
    } catch (error) {
      console.error('ERROR', error.message);
      setNotBreached(true); 
    } finally {
      setIsLoading(false);
    }
  }

  // FUNCTION TO HANDLE SUBMIT BUTTON CLICK
  function handleSubmit(e) {
    e.preventDefault();
    checkBreach();
  }

  // RENDER COMPONENTT UI
  return (
    <div>
      <h1>ENTER EMAIL TO CHECK IF IT HAS BEEN IN A BREACH</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          CHECK BREACH
        </button>
      </form>
      {isLoading && <p>LOADING....</p>}
      {notBreached && <p>EMAIL ADDRESS HAS NOT BEEN BREACHED.</p>}
      {breaches.length > 0 && (
        <div>
          <h2>BREACHED IN THE FOLLOWING SERVICES</h2>
          <div className="breached-services">
            {breaches.map((breach) => (
              <div key={breach.Name} className="breached-service">
                {breach.Name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default APIQuery;