const mongoose= require('mongoose')


const userSchema=mongoose.Schema(
{
        name:String,
        email:String,
        mobNumber:Number,
        password:String,
        timeStamp:Date
    });
    const users=   mongoose.model('users', userSchema); 

    const applicationSchema=mongoose.Schema(
        {
            userId:mongoose.ObjectId,
            fname: String,
            lname: String,
            email:String,
            state:String,
            streetAddress:String,
            city:String,
            companyName:String,
            pin:Number,
            a:String,
            b:String,
            c:String,
            d:String,
            e:String,
            incubationType:String, 
            userId:String,
            timeStamp:Date,
            status:String,
            view:Boolean
            });
            const applications=   mongoose.model('applications', applicationSchema); 
           
           
            const slotSchema=mongoose.Schema(
                {
                       slotBlock:String,
                       slotNumber:Number,
                       occupiedBy:String,
                       timeStamp:Date,
                       available:Boolean
                    });
                    const slots=   mongoose.model('slots', slotSchema); 


           
            module.exports ={
                users,
                applications,
                slots
            
            }

     