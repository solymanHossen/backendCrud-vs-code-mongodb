const express=require('express');
const { getContact, getContacts, createContact, deleteContact, editContact } = require('../controllers/contactController');

const router=express.Router();

router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContact).delete(deleteContact).put(editContact)


module.exports=router