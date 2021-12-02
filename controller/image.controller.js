
class ImageController {
    constructor(ImageService){
        this.ImageService = ImageService
    }

    async DownloadImage(req, res) {
        const { url } = req.query
        if (!url) {
            res.status(400).send("image url does not exist.")
            return 
        }
        const download = this.ImageService.DownloadImage(url)
        if(!download) {
            res.status(400).send("image download failed.")
            return 
        }
        res.status(200).send("image download successful.")
    }
}

module.exports = ImageController