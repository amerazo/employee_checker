// IMPORT EXPRESS 
const express = require('express');
const router = express.Router();

//  ROUTE HANDLER FOR THE '/proxy' ENDPOINT
router.get('/proxy', (req, res) => {
  // CREATE API URL BASED ON THE PROVIDED EMAIL QUERY PARAMs
  const apiUrl = 'https://haveibeenpwned.com/api/v3/breachedaccount/' + req.query.email;
  
  // SEND A REQUEST TO THE API WITH THE PROVIDED EMAIL && HIBP API KEY
  fetch(apiUrl, {
    headers: {
      'hibp-api-key': process.env.HIBP_API_KEY,
    },
  })
  // PARSE RESPONSE AS JSON
    .then((response) => response.json()) 
    .then((data) => res.json(data)) 
});

module.exports = router;
