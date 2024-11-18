import express from "express"
import { port } from "./config/configServer.js";
import { upload } from "./config/configMulter.js";
//import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import cloudinary from "./config/configCloudinary.js";
import connectDB from "./config/configMongodbAtlas.js";
import Image from "./Schema/userSchema.js";
    




const app=express();


app.post('/post',upload.single('myfile'),async (req,res)=>{
    console.log(req.file.path)

    try {
        const x= await cloudinary.uploader.upload(req.file.path)
        console.log("cloudianry",x)

        const db= new Image({Image_Url:x.secure_url});
        db.save().then(()=>{console.log('image url successfully uploaded to database')})

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
            your_url:{Image_Url:x.secure_url}
        })
    
    } catch (error) 
    {
        console.log(error);
        res.status(500).json({msg: "Something went wrong"})
      
    }
    
})

app.listen(port,()=>{
    console.log("server is running on " , port);
    connectDB();
    
})