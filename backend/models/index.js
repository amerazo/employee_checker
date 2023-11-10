// Require the Mongoose package & your environment configuration
require('dotenv').config()
const mongoose = require('mongoose');

// CONNECT TO MONGODB ATLAS
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// EXPORT MODELS
module.exports = {
    Subscription: require('./subscription'), 
    PhishingAttempt: require('./phishing') 
};

