# employee_checker

# Employee Email Monitoring Tool

## Problem
Employees sometimes register with their company email addresses on websites, and it's crucial to know if their accounts have been compromised to reduce the company's security risks. This project aims to create an employee email monitoring tool to address this issue using the HaveIBeenPwnedApi to fetch email addresses.

## User Stories

- As a security officer, I want to view breached and unbreached employee email address accounts for risk assessment.
- As an employee, I want to subscribe my email for monitoring to ensure my account's security.

## Strategy
### MVP
- Create a landing page that includes the ability to enter and search an email address that will display if an email account has been breached or not. 
- Create a form on the landing page that allows users to enter their name and email address for continuous monitoring. 

### Stretch
- Create the ability to store employee phishing stories.

### Third Party API
- Use the HaveIBeenPwned API here: [HaveIBeenPwned API](https://haveibeenpwned.com/API/v3#Authorisation)
- Authorisation is required for the API which enables searching HIBP by email address or domain, namely retrieving all breaches for an account, retrieving all pastes for an account, and retrieving all breached email addresses for a domain. I will need to request authorisation for the API.
- Use the DinoPass API here: [DinoPass API](https://www.dinopass.com/)

## ERD
![Image](https://i.imgur.com/JfBQaTI.jpeg)

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Have I Been Pwned API
- DinoPass API

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install backend and frontend dependencies with `npm i`.
4. Run the development server with `npm run dev`.

## Routes
| **Route**                 | **MVP or Stretch** | **Description**                                       |
|---------------------------|---------------------|-------------------------------------------------------|
| `GET /`                   | N/A                 | Landing Page                                          |
| **Email Subscription Route (MVP)** |                     |                                      |
| `POST /subscriptions`     | MVP                 | Submit email address for monitoring. Create a new record in MongoDB. |
| **APIQuery Route**        |                     |                                                     |
| `GET /query`              | MVP                | Route to fetch email breach data from HaveIBeenPwned API. |
| **DinoPass Route (New)**  |                     |                                                    |
| `GET /api/dinopass`       | STRETCH            | DinoPass Password Route                               |
| **PhishingForm Routes**   |                     |                                                    |
| `GET /phishing`           | MVP                | GET route for all phishing stories                    |
| `PUT /phishing`           | MVP                | EDIT route for phishing stories                       |
| `DELETE /phishing`        | MVP                | DELETE route for phishing stories                     |


## Wireframes
![Image](https://i.imgur.com/chKEEVW.png)
