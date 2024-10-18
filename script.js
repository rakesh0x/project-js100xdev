const express = require("express");
const app = express();
const { mongoose } = require("mongoose");
const Port = 3000; 

app.use(express.json());

const {userRouter} = require("./Routes/user")


async function main(){ 
    await mongoose.connect("mongodb+srv://rakesh:rakeshlovescharu@cluster0.krrv7.mongodb.net/")
}

main().catch(err => console.log(err));

app.listen(Port, () => {
    console.log(`server is running on port ${Port}`)
});