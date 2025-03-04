const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
// const DB_URL = process.env.port;

// Importing UserSchema in my server.js
const LoginSchema = require("./LoginSchema")


const app = express();
app.use(express.json());



app.post("/login", async (req,res) => {

    const { email, password } = req.body;

    if (!email) {
        res.status(400).send(`Email cannot be empty`);
    }

    if (!password) {
        res.status(400).send(`Password cannot be empty`);
    }


    // Added response for Success and Failure
    try 
    {
        const Login = new { email, password };
        res.status(200).send(Login);
    }

    catch (error) {
        res.send( `Following error is there` + error)
    }

})



app.get("/", async (req,res)=> {
    res.send(`Please enter /login in front of the URL`)
})

app.listen(port, ()=> {
    console.log(`Server is running on: http://localhost:${port}`)
})