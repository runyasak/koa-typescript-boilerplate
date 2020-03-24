FROM node:12.16.1-alpine

WORKDIR /usr/src/app

COPY ["./package.json", "./yarn.lock", "/usr/src/app/"]

RUN yarn

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
