const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.get('/', (req, res)=> {
    res.send("Hello Bitch bitch")
    console.log("Im called")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server started successfully on port: ${process.env.PORT}`)
})
