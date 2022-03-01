FROM node:lts-alpine

RUN apk update && apk add --virtual=module curl git python3 python3-dev py3-pip

WORKDIR /usr/local
RUN git clone https://github.com/plue1011/bookmark-app.git

WORKDIR bookmark-app

RUN npm install -g create-react-app
RUN npm install axios
RUN pip3 install uvicorn fastapi requests

EXPOSE 8000 3000
