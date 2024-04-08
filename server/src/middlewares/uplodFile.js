const multer = require("multer")
const path = require("path")
const createError = require("http-errors")

// const { uplodDir, fileSize,fileType } = require("../secrit")
// const uplodDir="./public/images"
// const fileSize=2097152
const fileType=["jpg","png","jpeg"]

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, "./public/images")
    },
    filename: function (req, file, cb) {
        const extname=path.extname(file.originalname)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+extname)
    }
  })

  const fileFileter =(req,file,cb)=>{
    const extname =  path.extname(file.originalname);
    if(!fileType.includes(extname.substring(1))){
    let error = createError(400,"file type is not allowed")
      return cb(error)
    }
    cb(null,true)
  }
  
  const upload = multer(
    { 
    storage: storage ,
    // limits:{fileSize:fileSize},
    fileFileter
  })
  module.exports = upload