import express  from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import router from "./routers/bookRoutes.js"
import cors from 'cors'
const app=express();
//Allow all origins
app.use(cors())
// app.use(
//     cors(
//         {
//             origin:["http://localhost:5173"],
//             methods:["GET","POST","PUT","DELETE"],
//             allowedHeaders:["Content-Type"]
//         }
//     )
// )
//Middleware for parsing body
app.use(express.json());

app.get('/',(req,res)=>{
    //console.log(req);
    return res.status(234).send("Welcome to Mern Stack");

});
app.use('/books',router);

mongoose.connect(mongoDBURL).then(
    ()=>{
        console.log(`Database Connected`)
        app.listen(PORT,()=>{
            console.log(`App is listening to port :${PORT}`)
        });
    }
).catch((error)=>{
    console.log("An error occured:"+error)
})