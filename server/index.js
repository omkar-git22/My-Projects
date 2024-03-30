import express from 'express';
import { connect } from 'mongoose';
import routes from "./routes/routes.js";
import cors from "cors";
import db_Connection from './database/db.js';
import mongoose from 'mongoose';

const app = express()

const port = 8000;

db_Connection();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/',routes);

//db

// const DB_URI = "mongodb+srv://chandeomkar:Omkar@#8446@gmail-clone.ig1l2qb.mongodb.net/?retryWrites=true&w=majority&appName=Gmail-Clone"

// mongoose.connect(DB_URI, {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true,useFindAndModify: false})
// .then(() => {
//     console.log("Yes Connection")
// }).catch((err) => {
//     console.log("lo Connection")
// })

//--------------------------------db--------------------------

app.get("/first",(req,res) => {
    res.send("Hello");
})

app.listen(port,() => {
    console.log("Server is Started");
})

