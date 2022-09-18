
const mongoose = require('mongoose')
const MONGO_URI =process.env.MONGO_URI


//exports.connect = ()=> {}
async function connect(){
    try{
        //console.log("dsfdsfsd",x)
        await mongoose.connect(MONGO_URI,
            (err)=>{
                if(err) throw err
            })
            console.log("connection success!")
    }
    catch(err){
        console.log("DB Error: ", err.message)
    }


}
exports.myConnection = connect