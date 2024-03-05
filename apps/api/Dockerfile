FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install



COPY . .

EXPOSE 8080

RUN npx prisma generate



RUN ["npm", "run", "dev"]