import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Test from '../Test';
import HomePage from '../HomePage';
import SubscriptionForm from '../SubscriptionForm';
import SubscriptionList from '../SubscriptionList';
import APIQuery from '../APIQuery';

function App() {
  // STATE VAR TO STORE SUBSCRIPTIONS
  const [subscriptions, setSubscriptions] = useState([]);

  // FETCH SUBSCRIPTIONS FROM SERVER WHEN COMPONENT MOUNTS
  useEffect(() => {
    fetch('/subscriptions')
      .then((response) => response.json())
      .then((data) => {
        setSubscriptions(data);
      });
  }, []);

  return (
    <div>
      {/* NAV MENU */}
      <nav>
        <ul>
          <li>
            {/* LINK TO TEST PAGE */}
            <Link to="/test">Test</Link>
          </li>
          <li>
            {/* LINK TO SUBSCRIPTION FORM */}
            <Link to="/subscription">Subscribe</Link>
          </li>
          <li>
            {/* LINK TO SUBSCRIPTIONS LIST */}
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
          <li>
            {/* LINK TO API QUERY PAGE */}
            <Link to="/query">API Query</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* ROUTE FOR HOME PAGE */}
        <Route path="/" element={<HomePage />} />
        {/* ROUTE FOR TEST PAGE */}
        <Route path="/test" element={<Test />} />
        {/* ROUTE FOR API QUERY PAGE */}
        <Route path="/query" element={<APIQuery />} />
        {/* ROUTE FOR SUBSCRIPTION FORM */}
        <Route path="/subscription" element={<SubscriptionForm />} />
        {/* ROUTE FOR SUBSCRIPTIONS LIST */}
        <Route
          path="/subscriptions"
          element={<SubscriptionList subscriptions={subscriptions} />}
        />
      </Routes>
    </div>
  );
}

export default App;
