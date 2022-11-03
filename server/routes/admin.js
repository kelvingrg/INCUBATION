var express = require('express');
const adminHelpers = require('../helpers/adminHelpers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

});
router.get('/appliactionData', function(req, res, next) {
  adminHelpers.appliactionData().then((response)=>{
    res.json(response)
  })    
});
router.get('/updateSatus', function(req, res, next) {
  adminHelpers.updateSatus(req.query).then((response)=>{
    res.json({response})})
 
});
router.get('/setViewTrue/:id', function(req, res, next) {
  console.log("hi im reached at admin backend",req.params.id)
  adminHelpers.setViewTrue(req.params.id)
 
});       

router.get('/getBookingSlotsData',(req,res)=>{
  console.log('reached at getBookingSlotsData backebd ');
  adminHelpers.getBookingSlotsData().then((response)=>{
    console.log("response");
    res.json(response)
    
  })          
})     
router.get('/getApprovedAppList',(req,res)=>{
  adminHelpers.getApprovedAppList().then((response)=>{
    res.json(response)
  })
})
router.get('/updateBookingSlot',(req,res)=>{
  adminHelpers.updateBookingSlot(req.query).then((response)=>{
    adminHelpers.getBookingSlotsData().then((response)=>{
      res.json(response)
      
    })
 })
})
router.post('/login',(req,res)=>{

  adminHelpers.login(req.body).then((response)=>{


    res.json(response)

  })
})

module.exports = router;                                            
                                                           