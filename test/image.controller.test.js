const httpMocks = require("node-mocks-http");
const ImageController = require("../controller/image.controller")
const ImageService = require("../services/Image.service")
const services = new ImageService()
const controller = new ImageController(services)

let req,res;
jest.useFakeTimers()
beforeEach( () => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})
describe("chech image controller",  () => {
    beforeEach( () => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    })
    it("should be func" , () => {
        expect(typeof controller.DownloadImage).toBe("function")
    })
    it("should call service" , () => {
        req.query.url = "https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf"
        services.DownloadImage = jest.fn()
        controller.DownloadImage(req,res)
        expect(services.DownloadImage).toBeCalledWith(req.query.url)
    })

    it("should return 200" , () => {
        req.query.url = "https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf"
        services.DownloadImage = jest.fn()
        services.DownloadImage.mockReturnValue(true)
        controller.DownloadImage(req,res)
        expect(res.statusCode).toBe(200)
        expect(res._getData()).toBe("image download successful.")
    })

    it("should return 400", () => {
        req.query.url = "https://images.unsplash.com/photo-mock"
        services.DownloadImage = jest.fn()
        services.DownloadImage.mockReturnValue(false)
        controller.DownloadImage(req,res)
        expect(res.statusCode).toBe(400)
        expect(res._getData()).toBe("image download failed.")
    })

    it("should return 400", () => {
        services.DownloadImage = jest.fn()
        services.DownloadImage.mockReturnValue(true)
        controller.DownloadImage(req,res)
        expect(res.statusCode).toBe(400)
        expect(res._getData()).toBe("image url does not exist.")
    })
})