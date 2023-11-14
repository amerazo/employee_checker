import React from 'react';
import APIQuery from '../APIQuery'; 
import SubscriptionForm from '../SubscriptionForm'; 
import DinoPass from '../DinoPass';
import Iframe from 'react-iframe';
import './styles.css'; 

function HomePage() {
  return (
    <div className="homepage-container">
      {/* MAIN CONTENT CONTAINER */}
      <div className="main-container">
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

           {/* PAGE BREAK AND GAME HEADER */}
           <div className="game-header">
        <hr />
        <h2>Play a game while you wait for your results</h2>
      </div>

      {/* GAME CONTAINER*/}
      <div className="game-container">
        <Iframe
          url="https://cdn.htmlgames.com/TrafficRacer2/"
          width="800px"
          height="750px"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default HomePage;
