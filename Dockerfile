FROM node:alpine as development
WORKDIR /nestapp
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "sh", "docker-start.dev.sh" ]

FROM node:alpine as production
WORKDIR /nestapp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "sh", "docker-start.prod.sh" ]