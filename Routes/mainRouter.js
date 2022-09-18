
const express = require('express');
const router = express.Router();

console.log("in mainRouter.js")
router.use('/songs' ,require('./songRoute'))

//router.use('/items' ,require('./itemRouter'))
//router.use('/orders' ,require('./orderRouter'))

router.get('/'), async (req, res)=>{
    console.log("Hello world!")
    try{
        console.log(req)
        res.send("Hellow world!")
    }
      catch{
            res.status(400).json()
    }
}

module.exports = router;