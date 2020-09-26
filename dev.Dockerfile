FROM node:13.12.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.3 -g --silent

COPY . ./

ENV CHOKIDAR_USEPOLLING=true
ENV DOCKER=true

EXPOSE 3000
CMD ["npm", "start"]
