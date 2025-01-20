const cloudinary= require("cloudinary");
const multer= require("multer");

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage= new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result= await cloudinary.UploadStream.upload(file, {
        resource_type: "auto",
    });   
    
    return result;
}

const upload= multer({storage});

module.exports={upload, imageUploadUtil};