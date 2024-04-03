const express = require("express")
const { createcategory, getCategory } = require("../controller/createCategoryController")
const {subCategory,} = require("../controller/subCategoryController")
const router = express.Router()

router.post("/createcategory",createcategory)
router.post("/subcategory",subCategory)
router.get("/allcategory",getCategory)

module.exports = router