const { imageUploadUtil } = require("../../helper/cloudinary");



const handleImageUpload= async(req,res)=>{
    try{

        const b64= Buffer.from(req.file.buffer).toString('base64');
        const url= "data:"+ req.file.mimetype + ";base64," + b64;
        const result= await imageUploadUtil(b64);

        res.json({
            "success": true,
            "message": "Image uploaded successfully",
            "data": result

        })


    } catch(error){
        console.log(error);
        res.json({
            status: false,
            message: "Error uploading image"
        })


    }
}

module.exports= {handleImageUpload};