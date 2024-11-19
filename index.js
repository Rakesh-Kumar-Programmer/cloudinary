import express from "express"
import { port } from "./src/config/configServer.js";
import { upload } from "./src/config/configMulter.js";
import connectDB from "./src/config/configMongodbAtlas.js";
import { uploadFile } from "./src/controllers/uploadController.js";
    

const app=express();


app.post('/post',upload.single("myfile"),uploadFile);

app.listen(port,()=>{
    console.log("server is running on " , port);
    connectDB();
    
})