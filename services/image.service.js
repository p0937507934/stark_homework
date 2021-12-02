const fs = require("fs")
const jimp = require("jimp")
const path = require("path")
const axios = require("axios")

class ImageService {

    async DownloadImage(url) {
        try { 
            const filePath = path.resolve(__dirname , "../uploads/")
            if(!fs.existsSync(filePath)) {
               fs.mkdirSync(filePath, { recursive: true })
            }
            const fileName = Date.now() + ".jpeg"
        await axios({
            url,
            responseType: 'stream',
            }).then(response =>
            new Promise((resolve, reject) => {
                response.data
                .pipe(fs.createWriteStream(filePath + "/"+ fileName))
                .on('finish', () => resolve())
                .on('error', e => reject(e));
                }))
            await this.flipImage(filePath,fileName)
        } catch (error) {
            return  new Error(error)
        }
    }

        async flipImage(filepath,filename) {
            console.log("Starting flip image...")
            const image = await jimp.read(filepath + "/" + filename)
            image.flip(true,true)
                .write(`${filepath}/Flip${filename}`)
            console.log("Flip image finished...")
        }

}

module.exports = ImageService
