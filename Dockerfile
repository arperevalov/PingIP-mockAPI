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
RUN npx prisma generate
RUN npx prisma migrate dev
CMD npm run start:prod