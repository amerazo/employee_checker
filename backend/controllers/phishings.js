const express = require('express');
const router = express.Router();

// IMPORT SUBSCRIPTION MODEL
const PhishingAttempt = require('../models/phishing');


router.get('/phishing', async (req, res) => {
    const newPhishingAttempts = await PhishingAttempt.find();
    res.json(newPhishingAttempts);

});

router.post('/', async (req, res) => {
    const { type, value, description, location } = req.body;
        const newPhishingAttempt = new PhishingAttempt({ type, value, description, location });
        await newPhishingAttempt.save();
        console.log(newPhishingAttempt);
        res.status(201).json(newPhishingAttempt);
});

router.put('/:id', async (req, res) => {
    const { type, value, description, location } = req.body;
    const updatedPhishingAttempt = await PhishingAttempt.findByIdAndUpdate(
      req.params.id,
      { type, value, description, location },
      { new: true }
    );
    res.json(updatedPhishingAttempt);
});



router.delete('/:id', async (req, res) => {
    const deletdPhishingAttempt = await PhishingAttempt.findByIdAndRemove(
      req.params.id
    );
    res.json({ message: 'ENTRY DELETED' });
});

module.exports = router;
