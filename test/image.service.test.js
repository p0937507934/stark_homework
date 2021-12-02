const fs = require("fs")
const jimp = require("jimp")
const ImageService = require("../services/Image.service")
const services = new ImageService()

const url = "https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf"

describe("check image services", () => {
    it("check download image", async() => {
        fs.createWriteStream = jest.fn()
        await services.DownloadImage(url)
        expect(fs.createWriteStream).toHaveBeenCalledTimes(1)
       
    })
})