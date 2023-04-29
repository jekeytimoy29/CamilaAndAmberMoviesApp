# Dockerfile for React client

# Build react client
FROM node:19-alpine3.16

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3014

CMD ["npm", "run", "dev"]