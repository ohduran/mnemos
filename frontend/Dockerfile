# Use an official node runtime as a parent image
FROM node:latest as builder

WORKDIR /app/

COPY ./package*.json ./

RUN mkdir node_modules && npm install

FROM node:latest
RUN npm install --global gatsby-cli && gatsby telemetry --disable && mkdir /save
COPY --from=builder /app/node_modules /save/node_modules