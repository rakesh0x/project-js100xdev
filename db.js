const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const user = require("./Routes/user");


const userSchema = new Schema({
    username: {type: String, unique: true },
    password: String,   
    firstname: String,
    lastname: String
})


const userModel = mongoose.model("User",userSchema);

module.exports = {
    userModel
}