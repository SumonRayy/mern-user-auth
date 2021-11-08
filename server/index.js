// imports
// create a new express server
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Middlewares // 
// using cors for browser policy
app.use(cors());
// using json
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mern-user-auth");

// creating routes
// register route :
app.post('/api/register', async (req, res) =>{
    console.log("body :",req.body);
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status : 'ok'});
    } catch (error) {        
        res.json({ status : 'error-occured : ', error: 'Duplicate Email'});
    }
})

// login route :
app.post('/api/login', async (req, res) =>{
    const user = await User.findOne({ 
        email: req.body.email, 
        // password: req.body.password,
    })

    if(!user) {
        return res.json({ status: 'error', error: 'Invalid Login id'})
    } else {    
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if (isPasswordValid) {
            const token = jwt.sign({
                name: user.name,
                email: user.email,
            }, 'meraSecret@1234')
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    }
})

// app listen on port 1337
app.listen(1337, () => {
    console.log('listening on port 1337');
    });

