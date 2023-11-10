import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage';
import SubscriptionForm from '../SubscriptionForm';
import PhishingForm from '../PhishingForm';
import APIQuery from '../APIQuery';
import DinoPass from '../DinoPass';


function App() {
  // STATE VAR TO STORE SUBSCRIPTIONS
  const [subscriptions, setSubscriptions] = useState([]);
  const [phishingAttempts, setPhishingAttempts] = useState([]);

  // FETCH SUBSCRIPTIONS FROM SERVER WHEN COMPONENT MOUNTS
  useEffect(() => {
    fetch('/subscriptions')
      .then((response) => response.json())
      .then((data) => {
        setSubscriptions(data);
      });
  }, []);

    // FETCH PHISHING ATTEMPTS FROM SERVER WHEN COMPONENT MOUNTS
    useEffect(() => {
      fetch('/phishing')
        .then((response) => response.json())
        .then((data) => {
          setPhishingAttempts(data);
        });
    }, []);

    return (
      <div>
        {/* NAV MENU */}
        <nav>
          <ul>
            <li>
              {/* LINK TO HomePage PAGE */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* LINK TO SUBSCRIPTIONS LIST */}
              <Link to="/phishing">Phishing Stories</Link>
            </li>
          </ul>
        </nav>
  
        <Routes>
          {/* ROUTE FOR HOME PAGE */}
          <Route path="/" element={<HomePage />} />
          {/* ROUTE FOR API QUERY PAGE */}
          <Route path="/query" element={<APIQuery />} />
          {/* ROUTE FOR SUBSCRIPTION FORM */}
          <Route path="/subscription" element={<SubscriptionForm />} />
          {/* ROUTE FOR SUBSCRIPTIONS LIST */}
          <Route path="/phishing" element={<PhishingForm />} />
          {/* ROUTE FOR SUBSCRIPTIONS LIST */}
          <Route path="/dinopass" element={<DinoPass />} />
      </Routes>
  
        {/* SubscriptionForm as a footer */}
        <div className="footer-container">
          <SubscriptionForm />
        </div>
      </div>
    );
  }
  
  export default App;