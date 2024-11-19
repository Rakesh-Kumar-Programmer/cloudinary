import express from "express"
import { port } from "./config/configServer.js";
import { upload } from "./config/configMulter.js";
import connectDB from "./config/configMongodbAtlas.js";
import { uploadFile } from "./controllers/uploadController.js";


const app=express();


app.post('/post',upload.single("myfile"),uploadFile);

app.listen(port,()=>{
    console.log("server is running on " , port);
    connectDB();
    
})