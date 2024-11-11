import express from "express"
import { port } from "./config/configServer.js";
import { upload } from "./config/configMulter.js";
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

import { cloud_Name} from './config/configServer.js';
import { api_Key } from './config/configServer.js';
import { api_Secret } from './config/configServer.js';
    
cloudinary.config({ 
    cloud_name: cloud_Name, 
    api_key: api_Key, 
    api_secret: api_Secret
});



const app=express();

// app.post('/post',upload.single('myfile'),async (req, res)=>{
        
 
//     const x =await cloudinary.uploader.upload(req.file.path)
//     console.log('file upload sucessfully to Coudinary : ', x );

//         // Remove the file
//     // fs.unlink((req.file.path),
//     // function(err){ 
//     // if (err) console.log(err); 
//     // else console.log("\nDeleted file");
//     // }) ;

//     res.send('Hello World!')
     
// })
app.post('/post',upload.single('myfile'),async (req,res)=>{
    console.log(req.file.path)

    try {
        const x= await cloudinary.uploader.upload(req.file.path)
        console.log("cloudianry",x)

        //const newvar = new Image({Image_Url:x.secure_url});
        //newvar.save().then(() => console.log('kaam ho gaya'));
        
        // Delete upload local server file 
        fs.unlink((req.file.path),
        function(err)
        { 
            if (err) console.log(err); 
            else console.log("\nDeleted local server file");
        }) 

        res.json({
            msg:"file uploaded",
            your_url:{image_url:x.secure_url}
        })
    
    } catch (error) 
    {
        console.log(error);
        res.status(500).json({msg: "Something went wrong"})
      
    }
    
})

app.listen(port,()=>{
    console.log("server is running on " , port);
    
})