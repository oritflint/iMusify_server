
const { response } = require('express')
const userController = require('../DAL/controlers/userControler')
const jwtFn = require('../middleware/jwt')

async function login(data){
    console.log("GOT INTO BL!")
    //check if user exist
    const user = await userController.readOne({email: data.email}, '+password')
    console.log("BACK TO BL. user:", user)
    if(!user) throw {code:403, msg: "User not found"}
    //check if password equals

    if(user.password !== data.password) throw {code:403, msg: "User or password is incorrect"}
    console.log("aaaaaaaaa", user._id)
   const token = jwtFn.createToken(user._id)
   console.log("token:",token)
   
    return {token: token, userDetails: user}
    //creat token
}

function searchYoutube(query){

    return []
}

async function makeUser(user){
    //check if user exist

    //for all items...
        //if exist
        //check stock <<>>qty
    //calc total
    //save order to db
    //update to stock

    // const user = await userController.read({_id: order.userId})
    // if(!user) throw "user does not exist"
    // for (i of order.cart){
        //if exist
        //const item = itemController.readOne({i.itemId})

    //}
}

async function isAdmin(id){
    const user = await userController.readOne({_id:id})
    if (user.permission ==="admin"){
        return true
        }
    else {
        return false
        }
    
}

module.exports = {makeUser, searchYoutube, login, isAdmin}

// const order = {
//     userId: 87464,
//     cart: {itemId:45345,
//            qty: 4}

// }

