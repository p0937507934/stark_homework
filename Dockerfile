FROM node:16.13.0

WORKDIR /usr/src/server

COPY ./package.json .

RUN ["npm", "install"]

COPY . .

CMD ["npm","run","deploy"]

EXPOSE 7000
