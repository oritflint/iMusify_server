
const express = require('express'),
router = express.Router(),
songLogic = require('../BL/songBL')

const {authJWT} = require('../middleware/auth')
const {adminAuth} = require('../middleware/adminAuth')

console.log("GOT INTO SONG_ROUTE!")
//מה שבירוק - מאפשר להוסיף עוד פונקציה לרצף של פונקציות שיעבדו אחת אחרי השנ יה
router.get("/", async (req, res)=>{
    try{
        console.log("GOT INTO getAllSongs()!")
        const result = await songLogic.getAllSongs()
        res.send(result)
    }
    catch(err){
        res.status(400).json(err)
    }
})


router.get("/:id", async (req, res)=>{
    try{
    const result = await songLogic.getSongById(req.params.id)
    res.send(result)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.post("/newSong", async (req, res)=>{
    try{
        console.log("GOT INTO newSong!")
        const result = await songLogic.addSong(req.body)
        res.send(result)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.post("/deletesong", async (req, res)=>{
    try{
        const result = await songLogic.deleteSong(req.body)
        res.send("Delete secceed")
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;