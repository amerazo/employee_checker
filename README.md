# employee_checker

# Employee Email Monitoring Tool

## Problem
Employees sometimes register with their company email addresses on websites, and it's crucial to know if their accounts have been compromised to reduce the company's security risks. This project aims to create an employee email monitoring tool to address this issue using the HaveIBeenPwnedApi to fetch email addresses.

## User Stories

- As a security officer, I want to view breached and unbreached employee email address accounts for risk assessment.
- As an employee, I want to subscribe my email for monitoring to ensure my account's security.

## Strategy

### Third Party API
- Use the HaveIBeenPwned API here: https://haveibeenpwned.com/API/v3#Authorisation
- Authorisation is required for the API which enables searching HIBP by email address or domain, namely retrieving all breaches for an account, retrieving all pastes for an account and retrieving all breached email addresses for a domain. I will need to request authorisation for the API.

## ERD

### EmailCheck Model ERD:
+----------------------------------------+
|        EmailSubscription              |
+----------------------------------------+
| _id: ObjectId                         |
| email: String (Subscribed Email)      |
| createdAt: Date (Timestamp)           |
| updatedAt: Date (Timestamp)           |
+----------------------------------------+

### STRETCH EmailCheck Model ERD:

+-------------------------------------+
|            EmailCheck              |
+-------------------------------------+
| _id: ObjectId                      |
| email: String (Email Address)      |
| breached: Boolean (Breach Status)  |
| breachDetails: String[] (Optional) |
| createdAt: Date (Timestamp)        |
| updatedAt: Date (Timestamp)        |
+-------------------------------------+


## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Have I Been Pwned API


## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install backend and frontend dependencing with `npm i`
4. Run the development server with `npm run dev`

## Routes
## Routes

| **Route**                         | **MVP or Stretch** | **Description**                                                             |
|-----------------------------------|---------------------|-----------------------------------------------------------------------------|
| **Landing Page Route**            |                     |                                                                             |
| `GET /`                           | N/A                 | Landing Page                                                                |
| **EmailSubscription Route (MVP)** |                     |                                                                             |
| `GET /api/email-subscription`     | MVP                 | Retrieve a list of all subscribed email addresses.                          |
| `POST /api/email-subscription`    | MVP                 | Submit  email address for monitoring. Create new record in MongoDB          |
| `DELETE /api/email-subscription/:id` | MVP              | Delete an email subscription id from MongoDB.                               |
| `PUT /api/email-subscription/:id` | MVP                 | Update an email subscription id from MongoDB                                |
| **EmailCheck Route (MVP)**        |                     |                                                                             |
| `GET /api/email-check/:id`        | MVP                 | Retrieve breach status for a specific email.                                |
|-----------------------------------|---------------------|-----------------------------------------------------------------------------|

## Wireframes

(i need to add it here)


