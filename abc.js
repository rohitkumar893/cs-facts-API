const express = require("express")

const app = express()

app.post("/",(req,res) => {
    res.send("data")
})

app.listen(8000, () => {
    console.log("server")
})