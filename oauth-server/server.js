const express = require('express')
const { OAuth2Client } = require('google-auth-library')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/', (req, res)=> {
    res.send("Hello Bitch bitch")
    console.log("Im called")
})


const client = new OAuth2Client(process.env.CLIENT_ID)
app.post("/api/v1/auth/google", async (req, res) => {
    
    console.log("Im called in the server!1!!!!!!")
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    console.log(ticket)
    const { name, email, picture } = ticket.getPayload();    
    console.log(name, email) 
    res.status(201)
    res.json(user)
})




app.listen(process.env.PORT, ()=>{
    console.log(`Server started successfully on port: ${process.env.PORT}`)
})
