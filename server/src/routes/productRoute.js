const express = require("express")
const { createcategory } = require("../controller/createCategoryController")
const router = express.Router()

router.post("/createcategory",createcategory)

module.exports = router