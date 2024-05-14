const express = require("express")
const { createcategory, getCategory } = require("../controller/createCategoryController")
const {subCategory, vewSubCategory,} = require("../controller/subCategoryController")
const { createProduct, vewProduct } = require("../controller/productcontroller")
const router = express.Router()
const upload = require("../middlewares/uplodFile")
const { createProVariant } = require("../controller/proVariantController")

// product
router.post("/",upload.single("images"),createProduct)
router.get("/",vewProduct)
// product variant route
router.post("/provariant",upload.single("images"),createProVariant)

// category
router.post("/createcategory",createcategory)
router.post("/subcategory",subCategory)
router.get("/allsubcategory",vewSubCategory)
router.get("/allcategory",getCategory)

module.exports = router