FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV CI=true
ENV REACT_APP_LOCAL=true

EXPOSE 3000

CMD [ "npm", "start" ]
