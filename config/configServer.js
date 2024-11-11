import dotenv from "dotenv";

dotenv.config();

export const port=process.env.PORT||5000;
export const cloud_Name=process.env.CLOUD_NAME;
export const api_Key=process.env.API_KEY;
export const api_Secret=process.env.API_SECRET;