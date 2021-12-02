# stark_homework

## Quick Start For Deploy
```sh
# clone repo
git clone https://github.com/p0937507934/order_system.git

# install dependency
cd stark_homework
yarn install 

# deploy server on 7000 port
yarn deploy

# run unit test
yarn test
```

## API

1. GET   
upload an image using stream, and flip image.

Request

| METHOD | URL                    |
| ------- | ----------------------| 
| GET    | /image?url={image_url} | 

Response

| statusCode | Msg                    |
| ------- | ----------------------| 
| 200    | image download successful. | 
| 400    | image url does not exist. | 
| 400    | image download failed. | 





## Project structure
- controller
  - Validate all parameters and call services
- services
  - Implement business logic
- router
  - allocate all the routes
- test
  - unit test file
- uploads
  - upload image and flip image.



  
