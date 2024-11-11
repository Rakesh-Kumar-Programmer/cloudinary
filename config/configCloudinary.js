import { cloud_Name} from './configServer.js';
import { api_Key } from './configServer.js';
import { api_Secret } from './configServer.js';




(async function () {
    
    cloudinary.config({ 
    cloud_name: cloud_Name, 
    api_key: api_Key, 
    api_secret: api_Secret
    });

  
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(req.file.path)
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();

