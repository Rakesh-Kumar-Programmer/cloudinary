import fs from "fs/promises"; 
//import fs from "fs";
import cloudinary from "../config/configCloudinary.js"; 
import Image from "../Schema/userSchema.js"; 

export const uploadFile = async (req, res) => {
    console.log("Uploaded file path:", req.file.path);

    try {
        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("Cloudinary upload result:", result);

        // Save the image URL to MongoDB
        const dbEntry = new Image({ Image_Url: result.secure_url });
        dbEntry.save().then(()=>{
            console.log("Image URL successfully saved to database");

        })
        
        await fs.unlink(req.file.path);
        console.log("Local server file deleted successfully");
        res.json({
          msg:"file uploaded",
          your_url:{Image_Url:result.secure_url}
        })

    } catch (error) 
    {
      console.log(error);
      res.status(500).json({msg: "Something went wrong"})
    
    }
  
}
