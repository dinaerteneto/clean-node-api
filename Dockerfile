FROM node:12
WORKDIR /usr/src/clear-node-api
COPY ./package.json .
RUN npm install --only=prod