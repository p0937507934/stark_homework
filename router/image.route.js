const express = require("express")
const router = express.Router()
const Service = require("../services/Image.service")
const Controller = require("../controller/image.controller")

const ImageService = new Service()
const ImageController = new Controller(ImageService)

router.get("/", ImageController.DownloadImage.bind(ImageController))


module.exports = router