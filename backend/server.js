require('dotenv').config({ path: '../.env' }); 
require('dotenv').config(); 
//REQUIRE MODULES
const PORT = process.env.PORT || 4000;
//SOURCE: OFFICE HOURS + AUTH DOMAIN IN CLASS LECTURE NOTES
//LOAD ENVIRONMENTS
const express = require('express');
const cors = require('cors')
const path = require('path')


//REQUIRE THE DATABASE CONNECTION & MODELS
const db = require('./models');

// REQUIRE ROUTES IN THE CONTROLLERS FOLDER
const subCtrl = require('./controllers/submissions');
const apiCtrl = require('./controllers/apiquery');
const phiCtrl = require('./controllers/phishings');


// CREATE THE EXPRESS APP
const app = express();



//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// VITE BUILD FOR HEROKU DEPLOYMENT
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


// MOUNT ROUTES
app.use('/api/subscriptions', subCtrl);
app.use('/api/subscriptions', apiCtrl);
app.use('/api/phishing', phiCtrl);

// USE DIST FOLDER FOR ROUTES THAT ARE NOT DISPLAYED HERE
// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});



// START SERVER
app.listen(PORT, () => {
  console.log(`EXPRESS IS LISTENING ON PORT ${PORT}`);
});


