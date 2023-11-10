import React from 'react';
import APIQuery from '../APIQuery'; 
import SubscriptionForm from '../SubscriptionForm'; 
import DinoPass from '../DinoPass';

function HomePage() {
  return (
    <div>
      <div className="ui container">
        <h1 className="ui header">Purpose of the Tool</h1>
        <p>
          Employees sometimes register with their company email addresses on
          websites, and it's crucial to know if their accounts have been
          compromised to reduce the company's security risks. This project aims to
          create an employee email monitoring tool to address this issue using the
          HaveIBeenPwnedApi to fetch email addresses.
        </p>
        <p>Phishing attempts often display common red flags, including:</p>
        <ul>
          <li>Generic greetings or no personalization.</li>
          <li>Misspelled URLs or email addresses.</li>
          <li>Urgent or threatening language.</li>
          <li>Requests for sensitive information like passwords or Social Security numbers.</li>
        </ul>
        <DinoPass />
        <APIQuery />
      </div>
    </div>
  );
}

export default HomePage;
