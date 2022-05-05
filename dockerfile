FROM node:lts-alpine

RUN apk update && apk add --virtual=module curl git

WORKDIR /usr/local
RUN git clone https://github.com/plue1011/bookmark-app.git

WORKDIR bookmark-app

RUN npm install -g create-react-app
RUN npm install axios

EXPOSE 8000 3000
