const express = require("express")
const cors = require("cors")
const app = express()
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const path = require("path")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())
app.use("/public/images",express.static(path.join(__dirname,"public/images")))

app.use("/api/user",userRoute)
app.use("/api/product",productRoute)



app.get("/",(req,res)=>{
    res.send('welcome to my Ecommerce')
})


// pages error 404
app.use((req,res,next)=>{
    res.status(404).send("<h1>404 pages is not found</h1>")
})

// server error 500
app.use((err,req,res,next)=>{
    res.status(500).send('server error',err)
})

module.exports = app;