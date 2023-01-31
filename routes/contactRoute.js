const express = require('express');
const { createContact, getContact } = require('../Controller/ContactController');
const router = express.Router();

router.post('/contact', createContact );
router.get('/contact' , getContact);


module.exports = router;