const express = require("express")
const ImageRouter = require("./router/image.route")
const app = express()


app.use("/image", ImageRouter)

app.listen(7000,() => {
    console.log("server is running on 7000.")
})

module.exports = app
