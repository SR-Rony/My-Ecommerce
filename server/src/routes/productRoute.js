const express = require("express")
const { createcategory, getCategory } = require("../controller/createCategoryController")
const {subCategory,} = require("../controller/subCategoryController")
const { createProduct, vewProduct } = require("../controller/productcontroller")
const router = express.Router()
const upload = require("../middlewares/uplodFile")
// const multer = require("multer")


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./uploads")
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })


// product
router.post("/",upload.single("images"),createProduct)
router.get("/",vewProduct)

// category
router.post("/createcategory",createcategory)
router.post("/subcategory",subCategory)
router.get("/allcategory",getCategory)

module.exports = router