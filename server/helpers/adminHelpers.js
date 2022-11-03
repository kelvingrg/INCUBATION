const db = require('../config/db')
const USERS = require('../model/userModel').users
const APPLICATION = require('../model/userModel').applications
const SLOTS = require('../model/userModel').slots
const jwt = require('jsonwebtoken')
require('dotenv').config();
//const JWT_KEY=process.env.JWT_KEY
const JWT_KEY='password'

module.exports = {
    appliactionData: () => {
        console.log("reached at helpers");
        return new Promise(async (resolve, reject) => {
            await APPLICATION.find().then((data) => {

            

                resolve(data)
            })
        })
    },
    updateSatus: (data) => {
        console.log("inside asdmin adminHlpers", data);
        return new Promise(async (resolve, reject) => {
            await APPLICATION.updateMany({
                _id: data.appId
            }, {
                $set: {
                    status: data.status,
                    view: true
                }
            }, {upsert: true}).then(async () => {
                await APPLICATION.find().then((data) => {
                    console.log(data);
                    resolve(data)

                })

            })

        })

    },
    setViewTrue: (id) => {
        console.log(id, "id");
        APPLICATION.updateOne({
            _id: id
        }, {
            $set: {
                view: true
            }
        }).then((response) => {
            console.log('updateview done ,', response);
        })

    },
    getBookingSlotsData: () => {
        return new Promise(async (resolve, reject) => {
            await SLOTS.find().sort({slotNumber: 1}).then((response) => {
console.log(response,"responseat backent getr slot dataa");
                resolve(response)
            })
        })

    },
    getApprovedAppList: () => {
        return new Promise(async (resolve, reject) => {
            await APPLICATION.find({status: 'Approved'}).then((response) => {
                resolve(response)
            })
        })

    },
    updateBookingSlot: (appData) => {
        appData.bookingSlotNo = parseInt(appData.bookingSlotNo)
        return new Promise(async (resolve, reject) => {
            await SLOTS.updateOne({
                slotNumber: appData.bookingSlotNo,
                slotBlock: appData.bookingSlotBlock
            }, {
                $set: {
                    timeStamp: new Date(),
                    available: false,
                    occupiedBy: appData.selectedCx
                }
            }, {upsert: true}).then((response) => {
                console.log(response, "response response at backend ");
                resolve(response)
            })
        })
    },
    login: (loginData) => {
        console.log(loginData);
        let login
        return new Promise(async (resolve, reject) => {
            const email = "admin@admin.com"
            const password = "1234"
            if (loginData.email === email && loginData.password === password) {
                 login = true
        
            } else {
              login = false
                
            }
            if (login) {
              const token=  jwt.sign({name: "admin", email: email},JWT_KEY)
                console.log("success");

           
                resolve({admin: true, token: token})
            } else {
                console.log("fail");
                resolve({admin: false, message: "Log in faild"})

            }
        })
    }


}
