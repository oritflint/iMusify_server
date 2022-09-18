
const express=require("express");
const router = express.Router();
const songRoute = require('./songRoute');
const userRoute = require('./userRoute');

console.log("GOT INTO ROUTES/INDEX")
router.use("/songs", songRoute);
router.use("/users", userRoute);

module.exports = router;