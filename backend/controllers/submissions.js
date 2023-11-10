const express = require('express');
const router = express.Router();

// IMPORT SUBSCRIPTION MODEL
const Subscription = require('../models/subscription');

// HANDLE POST REQUESTS TO CREATE NEW SUBSCRIPTIONs
router.post('/subscribe', async (req, res) => {
  // EXTRACT NAME, EMAIL, && REASON FROM THE REQUEST BODY
  const { name, email, reason } = req.body;
  
  // CREATE NEW SUBSCRIPTION INSTANCE
  const newSubscription = new Subscription({
    name,
    email,
    reason,
  });

  // SAVE THE NEW SUBSCRIPTION TO MONGODB
  await newSubscription.save();

  // SEND A 201 CREATED STATUS && JSON RESPONSE WITH THE NEW SUBSCRIPTION
  //RECOMMENDED BY HAVEIBEENPWNED API DOCUMENTATION
  res.status(201).json(newSubscription);
});



// EXPORT THE ROUTER FOR USE IN OTHER MODULES
module.exports = router;
