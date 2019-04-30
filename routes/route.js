const express=require('express');
const router=express.Router();
const Contact=require('../models/contacts')


//retrieving data
router.get('/contacts',(req,res,next)=>{
   // res.send('Retrieving contact list');
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
})

//add contact
router.post('/contact',(req,res,next)=>{
let newContact=new Contact({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    phone:req.body.phone
})

newContact.save((err,contact)=>{
    if(err){
        res.json({msg: 'failed to add contact'});
    }
    else{
        res.json({msg: 'contact added successfully'});
    }
})

});

//edit
router.get('/edit/:id',(req,res,next)=>{
    let id= req.params.id;
    Contact.findById(id,function(err,result){res.json(result)})
});
//update
router.post('/update/:id',(req,res,next)=>{
Contact.findById(req.params.id,(err,result,next)=>{
if(!result){
    return next(new error('couldnot load doc'))
}
else{
    result.first_name=req.body.first_name;
    result.last_name=req.body.last_name;
    result.phone=req.body.phone;
    result.save().then(master=>{res.json('update complete');
})
}
});
});

//delete contact
router.delete('/contact/:id',(req,res,next)=>{
Contact.remove({_id:req.params.id},function(err,result){
if(err){
    res.json(err);
}
else{
    res.json(result);
}
})
})
module.exports = router;
