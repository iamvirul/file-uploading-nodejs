const express = require("express");
const cors = require( "cors" );
const multer = require('multer');

const app = express();
app.use(cors());
const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,__dirname+ "/uploads")
    },
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
})
const uploads = multer({storage:storage})
app.post("/uploads",uploads.array("files"),(req,res)=>{
    console.log(req.body);
    console.log(req.files)

    res.json({status: "files recevied"})
})

app.listen(8080,function(){
    console.log("Server running on port 8080")
})