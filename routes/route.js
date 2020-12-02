const express = require('express');
const router = express.Router();

router.get('/contacts', (req,res,next)=>{
    res.send('Retrieving the Contact List');
}); 

router.post('/contacts', (req,res,next)=>{
   
}); 

router.delete('/contacts', (req,res,next)=>{
   
}); 



module.exports = router;
