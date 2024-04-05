const express = require("express")
const { createcategory, getCategory } = require("../controller/createCategoryController")
const {subCategory,} = require("../controller/subCategoryController")
const { createProduct } = require("../controller/productcontroller")
const router = express.Router()


// product
router.post("/",createProduct)

// category
router.post("/createcategory",createcategory)
router.post("/subcategory",subCategory)
router.get("/allcategory",getCategory)

module.exports = router