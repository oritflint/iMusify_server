
//require('../DAL/db').myConnection()
const songController = require('../DAL/controlers/songControler')


async function addSong(song){
    console.log("GOT INTO ADD_SONG")
    const res = await songController.create(song)
    console.log("addSong res: "+res)
    if(!res) throw "song didnt added"
    else console.log(song)
}

async function deleteSong(id){
    console.log("GOT INTO DELETE_SONG")
    const res = await songController.del({_id: id})
    console.log("res: "+res)
    if(!res) throw "song didnt delete"
    else console.log("res",res)
}


function getSongByPlaylistId(playlistId){
    const Song = songController.readOne({playlist_id: playlistId})
    if(!Song) throw "Song does not exist"
    else return Song;
}

function getSongById(id){
    const Song = songController.readOne({_id: id})
    if(!Song) throw "Song does not exist"
    else return Song;
}
/*
async function isAdmin(id){
    const user = await userController.readOne({_id:id})
    if (user.permission ==="admin"){
        return true
        }
    else {
        return false
        }
    
}*/
function getAllSongs(){
    return songController.read({})
}

//etAllSongs()

module.exports = {addSong, getAllSongs, getSongById, getSongByPlaylistId, deleteSong}

// const song = {
//     userId: 87464,
//     cart: {itemId:45345,
//            qty: 4}

// }