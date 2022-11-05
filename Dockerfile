FROM node:alpine as development
WORKDIR /nestapp
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "sh", "prisma-migrate.sh" ]