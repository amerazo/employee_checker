import React from 'react';

function Test() {
  return (
    <div>
      <h1>Purpose of the Tool</h1>
      <p>
        Employees sometimes register with their company email addresses on
        websites, and it's crucial to know if their accounts have been
        compromised to reduce the company's security risks. This project aims to
        create an employee email monitoring tool to address this issue using the
        HaveIBeenPwnedApi to fetch email addresses.
      </p>

      <h2>User Stories</h2>
      <div>
        <h3>As a security officer,</h3>
        <p>
          I want to view breached and unbreached employee email address accounts
          for risk assessment.
        </p>
      </div>

      <div>
        <h3>As an employee,</h3>
        <p>
          I want to subscribe my email for monitoring to ensure my account's
          security.
        </p>
      </div>
    </div>
  );
}

export default Test;
