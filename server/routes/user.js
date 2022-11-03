const { response } = require('express');
var express = require('express');
var router = express.Router();
let userHelpers=require('../helpers/userHelpers')
let adminHelpers =require('../helpers/adminHelpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/test',(req,res)=>{                         
  console.log('reached at backend',req,"**");
                
        
})               
router.post('/signup', (req,res)=>{                   
          
try{                   
 userHelpers.doSignup(req.body).then((response)=>{
    res.json({response})          
  })
  
} catch(error){
  console.log(error);
}
})   
router.post('/login',(req,res)=>{
  try{
    userHelpers.doLogin(req.body).then((response)=>{
      res.json(response)
    })

  }catch(error){                     
    console.log(error);
  }

}) 
router.post('/applicationForm',(req,res)=>{
  userHelpers.applicationForm(req.body)
})       
router.get("/viewStatus",(req,res)=>{
  userHelpers.viewStatus(req.query.userId).then((response)=>{
    res.json(response)
  })
})           
                                      
module.exports = router;                        
               