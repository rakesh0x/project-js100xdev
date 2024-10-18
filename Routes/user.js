// const express = require('express');
// const app = express();
const {Router} = require("express");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const mongoose = require('mongoose'); // Assuming Mongoose is being used for the user model
const User = require('../db'); // Import the User model

// Secret for JWT
const JWT_SECRET = "Rakeshlovecharu";

// Signup Route
userRouter.post("/signup", async function(req, res){     
    const { username, password, firstname, lastname } = req.body; // Accessing username and password from req.body

    // Find if user already exists
    const user = await User.findOne({ username });

    if(user) {
        res.json({
            message: "You are already a registered user"
        });
    } else {
        // Assuming you're creating and saving a new user
        const newUser = new User({ username, password });
        await newUser.save(); // Save the new user to the database

        res.json({
            message: "Signup successful"
        });
    }
});

// Signin Route
userRouter.post("/signin", async function(req, res){
    const { username, password } = req.body; // Accessing username and password from req.body

    // Find the user with matching credentials
    const user = await User.findOne({
        username: username,
        password: password
    });

    // If the user is found
    if(user){
        // Generate JWT Token
        const token = jwt.sign({
            id: user._id // Use the user ID from the database
        }, JWT_SECRET);

        res.json({
            token: token
        });
    } else {
        // Invalid credentials
        res.status(403).send({
            message: "Invalid credentials"
        });
    }
});
