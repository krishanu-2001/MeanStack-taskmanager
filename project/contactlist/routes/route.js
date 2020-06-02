const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//retrieving data
router.get('/contacts', (req,res,next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

//add contact
router.post('/contact', (req,res,next)=>{
    //logic to add contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        times: req.body.times,
        label: req.body.label,
        completed: req.body.completed
    });
    newContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'failed to add contact'});

        }
        else
        {
            res.json({msg: 'added successfuly'});
        }
        
    });
});

//delete contact
router.delete('/contact/:id', (req,res,next)=>{
    //logic to delete by id contact
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json({msg: 'failed to delete'});
        }
        else
        {
            res.json(result);
        }
    }); 
});

router.put('/contact/:id', (req,res,next)=>{
    //logic to delete by id contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        times: req.body.times,
        label: req.body.label,
        completed: req.body.completed
    });
    Contact.update({"first_name": "laundry"}, 
        newContact,
        function(err, result){
        if(err)
        {
            res.json({msg: 'failed to update'});
        }
        else
        {
            res.json(result);
        }
    }); 
});


module.exports = router;