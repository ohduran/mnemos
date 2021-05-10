FROM node:current-slim
RUN apt update && apt upgrade -y && \
    apt install gcc g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp -y
RUN yarn global add gatsby-cli && gatsby telemetry --disable
# The port gatsby runs on
EXPOSE 9000
WORKDIR /app
COPY ./package.json /app
COPY ./yarn.lock /app
RUN yarn install && yarn cache clean
COPY . /app
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]