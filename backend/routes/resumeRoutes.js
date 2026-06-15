const express=require("express");
const multer=require("multer");
const parseResume=require("../utils/resumeParser");

const router=express.Router();

const upload=multer({dest:"uploads/"});

router.post("/",upload.single("resume"),async(req,res)=>{

const text=await parseResume(req.file.path);

res.json({content:text});

});

module.exports=router;