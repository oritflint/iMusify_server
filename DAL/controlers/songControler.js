
require('../db').myConnection()                     //אפשר לחפש ברשת require VS import
console.log('connection secceeded!')

const {songModel} = require("../models/song")


async function create(data){
    const res = await songModel.create(data)
    console.log(res)
    return res
}

async function read(filter){
    const res = await songModel.find({...filter, isActive: true})
    console.log(res)
    return res;
}

async function readOne(filter, proj){
    console.log("GOT INTO DAL!", filter, proj)
    const res = await songModel.findOne(filter, proj)
    console.log(res)
    return res;
}
async function update(filter, newValue){
    const res = await songModel.updateOne(filter, newValue)
    console.log(res)
    //return res;
}

async function del(filter){
    const res = await songModel.updateOne(filter, {isActive: false})
    console.log("Deleted:", res)
    return res;
}

// let Item5 = {   
//     song_id: 5,                                   //Item to Insert
//     name: 'TEST',
//     videoSrc: 'xf45dgf6hfh'
// }

//create(Item5)
//readOne({_id:})
//{

// let user1 = {                                     //Item to Insert
//     userID: 1111,
//     firstnname: 'Orit',
//     lastnname: 'Flint',
//     password: '1234',
//     creationDate: new Date(2022,06,01),
//     address: {street:'BeerZait',houseNum:64, City:'ATERET'},
//     sex: 2
// }

// let user2 = {                                     //Item to Insert
//     userID: 2222,
//     firstnname: 'Michal',
//     lastnname: 'Levi',
//     password: 'mic123',
//     creationDate: new Date(2021,11,01),
//     address: {street:'Hertzel',houseNum:115, City:'SHFAIIM'},
//     sex: 2
// }

// create(user2)
// update({_id: '62a71f6eadb1e6ccaca9d7c2'}, 
// {title: 'blabla',
// price: 200
// })

//read({category: 'jewelery'})
//del({_id: '62a71f6eadb1e6ccaca9d7c2'})
//}

module.exports = {create, read, readOne, update, del}