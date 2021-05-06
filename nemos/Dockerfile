FROM node:latest

RUN mkdir /app
WORKDIR /app
RUN npm i -g gatsby-cli --legacy-peer-deps --arch=x64 --platform=linux
RUN gatsby telemetry --disable
COPY ./package*.json /app/
RUN npm install --legacy-peer-deps --arch=x64 --platform=linux
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/
EXPOSE 9000
CMD ["./entrypoint.sh"]