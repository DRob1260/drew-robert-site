FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV CI=true
ENV DOCKER=true

EXPOSE 3000

CMD [ "npm", "start" ]
