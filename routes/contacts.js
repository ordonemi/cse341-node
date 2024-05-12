const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// Get all contacts
router.get('/', contactsController.getAll);

// Get specific contact based on ID
router.get('/:id', contactsController.getSingle);

// Create new contact
router.post('/',contactsController.addContact);

// Update contact
router.put('/:id', contactsController.updateContact);

// Delete contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
