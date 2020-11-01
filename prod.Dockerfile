FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.3 -g --silent
COPY . ./
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "-l", "3000", "build"]
