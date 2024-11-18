import cloudinary from 'cloudinary';
import { cloud_Name} from './configServer.js';
import { api_Key } from './configServer.js';
import { api_Secret } from './configServer.js';

cloudinary.config({ 
 cloud_name: cloud_Name, 
 api_key: api_Key, 
 api_secret: api_Secret
});

  
export default cloudinary;