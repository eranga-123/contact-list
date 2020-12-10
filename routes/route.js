const express = require('express');
const router = express.Router();
const Contact = require('../routes/models/contacts');
const Mail = require('../routes/models/mail');  

router.get('/contacts', (req,res,next)=>{
   Contact.find(function(err,contacts){
       res.json(contacts);
   })  
}); 

router.post('/contacts', (req,res,next)=>{
   let newContact = new Contact({
       first_name : req.body.first_name,
       last_name : req.body.last_name,
       phone : req.body.phone
   });
    
   newContact.save((err,contact)=>{
       if(err){
           res.json({msg : 'failed to add contact'});
       }else{
        res.json({msg : 'contact added succesfully'});;
       }

   });
}); 

router.delete('/contacts/:id', (req,res,next)=>{
   Contact.remove({_id : req.params.id}, function(err,result){
       if(err)
       {
           res.json(err);
       }
       else{
           res.json(result);
       }
   });
}); 


router.get('/mail', (req,res,next)=>{
    Mail.find(function(err,mail){
        res.json(mail);
    })  
 }); 
 
 router.post('/mail', (req,res,next)=>{
    let newMail = new Mail({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    });
     
    newMail.save((err,contact)=>{
        if(err){
            res.json({msg : 'failed to add email'});
        }else{
         res.json({msg : 'email added succesfully'});;
        }
 
    });
 }); 
 
 router.delete('/mail/:id', (req,res,next)=>{
    Mail.remove({_id : req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
 }); 
 

module.exports = router;
