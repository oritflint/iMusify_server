 require('../db').myConnection()                     //אפשר לחפש ברשת require VS import
 console.log('connection secceeded!')

const mongoose = require('mongoose')                //Sort of DB
const { boolean } = require('webidl-conversions')

const songSchema = new mongoose.Schema({
    user_id:{
        type: Number,
        required: true,
        unique: true
    },
    playlist_id:{
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    videoSrc: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    uploadedAt: {
        type: String,
        required: true,
    },
    duration_formatted: {
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true
    }

})                                                  //Sort of Table
const songModel = mongoose.model('song',songSchema) //Sort of table-item tool
                                                //Sort of Table
{
    let Item1 = {   
        song_id: 1,                                   //Item to Insert
        name: 'Mozart',
        videoSrc: 'nrQNDcZjErw'
    }
    let Item2 = {                                     //Item to Insert
        song_id: 2,                                   //Item to Insert
        name: 'Bach',
        videoSrc: 'uiTrB-zA7bc'
    }
    let Item3 = {                                     //Item to Insert
        song_id: 3,                                   //Item to Insert
        name: 'Tchaikovsky',
        videoSrc: 'DG87oy53_zM'
    }
    let Item4 = {                                     //Item to Insert
        song_id: 4,                                   //Item to Insert
        name: 'Chopin',
        videoSrc: 'y1dbbrfekAM'
    }

}

module.exports = {songModel}

//וזה מה שאביעד הציע לעשות, שזה בעצם אותו דבר
//exports.ItemModel = itemModel
//אבל אז בקונטרולר צריך לעשות
//itemModel.ItemModel.
