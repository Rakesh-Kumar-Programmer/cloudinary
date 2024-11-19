import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//     {
//        image: {
//         url: String,
         
     
//        }
       
//     },
//     { timestamps: true }
// )
// const user = mongoose.model("user",userSchema); // user colection
const Image = mongoose.model('Image', {Image_Url: String });

export default Image;