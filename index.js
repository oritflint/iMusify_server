const { userModel } = require("./DAL/models/user")
const { songModel } = require("./DAL/models/song")


require("dotenv").config()

const express = require("express"),
app = express(),
PORT = process.env.PORT || 4000,
router = require("./Routes")

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))

app.use(express.json())
app.use(require("cors")())

app.use("/api", router)
require("./DAL/db").myConnection()

