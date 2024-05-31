const express = require("express")
const { createcategory, getCategory } = require("../controller/createCategoryController")
const {subCategory, vewSubCategory,} = require("../controller/subCategoryController")
const { createProduct, vewProduct, singleProduct } = require("../controller/productController")
const router = express.Router()
const upload = require("../middlewares/uplodFile")
const { createProVariant } = require("../controller/proVariantController")
const { addCard, vewCard } = require("../controller/cardController")
const { addCupon } = require("../controller/cuponController")

// product
router.post("/",upload.single("images"),createProduct)
router.get("/",vewProduct)
// single product
router.get("/singleproduct/:slug",singleProduct)
// product variant route
router.post("/provariant",upload.single("images"),createProVariant)

// product category
router.post("/createcategory",createcategory)
router.get("/allcategory",getCategory)
// subcategory
router.post("/subcategory",subCategory)
router.get("/allsubcategory",vewSubCategory)
// product cart
router.post("/card",addCard)
router.get("/card",vewCard)
// product cupon
router.post("/cupon",addCupon)

module.exports = router