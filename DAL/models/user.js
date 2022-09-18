require('../db').myConnection()                     //אפשר לחפש ברשת require VS import
console.log('connection secceeded!')

const mongoose = require('mongoose')                //Sort of DB
const { boolean } = require('webidl-conversions')

const userSchema = new mongoose.Schema({
    user_id:{
        type: Number,
        required: true,
        unique: true
    },
    firstnname: {
        type: String,
        required: true
    },
    lastnname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    address: {
        street: {type: String},
        houseNum: {type: Number},
        city: {type: String}
    },
    sex: {
        type: Number,
        default: 1
        //1 - Men | 2 - Women
    },
    role: {
        type: Number,
        default: 3
        //1 - MGR | 2 - Editor | 1 - User
    },
    permission: {
        type: String,
        enum:['viewer', 'editor', 'admin'],
        default: 'viewer'
    },
    isActive:{
        type: Boolean,
        default: true
    }

})                                                 //Sort of Table
const userModel = mongoose.model('user',userSchema) //Sort of table-item tool

{// let ItemUser = {                                     //Item to Insert
//     user_id:1,
//     firstnname: 'Orit',
//     lastnname: 'Flint',
//     email:'orelflint@gmail.com',
//     password: '6165',
//     address: 'ATERET',
//     sex: 2
// }
}

module.exports = {userModel}
