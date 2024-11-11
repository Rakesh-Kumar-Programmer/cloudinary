import express from "express"
import { port } from "./config/configServer.js";
import { upload } from "./config/configMulter.js";
import { v2 as cloudinary } from 'cloudinary';
import { cloud_Name} from './config/configServer.js';
import { api_Key } from './config/configServer.js';
import { api_Secret } from './config/configServer.js';
    
cloudinary.config({ 
    cloud_name: cloud_Name, 
    api_key: api_Key, 
    api_secret: api_Secret
    });



const app=express();

app.post('/post',upload.single('myfile'),async (req, res)=>{
        
    try {
        const x =await cloudinary.uploader.upload(req.file.path)
        console.log('file upload sucessfully to Coudinary : ', x );
    
    res.send('Hello World!')
    } catch (error) {
        console.log(error);
        res.status(500).send('Error in uploading to cloudinary')
                
    }
    
})


app.listen(port,()=>{
    console.log("server is running on " , port);
    
})