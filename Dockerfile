FROM node:20.9.0

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install

COPY . /usr/src/app

EXPOSE 3002

CMD [ "node", "dist/src/main" ]
