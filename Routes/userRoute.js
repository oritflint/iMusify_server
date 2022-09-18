
const express = require('express'),
router = express.Router(),
userLogic = require('../BL/userBL')

const {authJWT} = require('../middleware/auth')
const {adminAuth} = require('../middleware/adminAuth')

console.log("GOT INTO USER_ROUTE!")

router.post('/login', async (req, res)=>{
    try {
        console.log("GOT INTO login API")
        console.log("req.body:", req.body)
        const result = await userLogic.login(req.body)
        
        console.log("okkkkk!")
        console.log("result: ", result)
        res.send(result)
        
    } catch (error) {
        console.log("error!!!!",error.msg)
        res.status(400).json(error)
        //res.status(error.code).send(error.msg)
    }
})

router.get('/:id', async (req, res)=>{
    try {
        console.log("GOT INTO UserRout2")
        console.log("req.body:", req.body)
        const result = await userLogic.isAdmin(_id)
        
        console.log("okkkkk!")
        res.send(result)
        
    } catch (error) {
        console.log("access denided",error.msg)
        res.status(error.code).send(error.msg)
    }
})

router.get('/login-test', authJWT, adminAuth, async(req,res)=>{
    res.send("!!!!!!!!!!!!!!!!")
})

module.exports = router;