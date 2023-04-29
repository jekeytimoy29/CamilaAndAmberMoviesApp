# Camila And Amber Movies App

An App where it shows a collection of movies and let the user register and add their comments and ratings about the movies. An admin account can manage movies and users where it can perform add, edit, and delete.

# Components Tree Diagram

![image](https://user-images.githubusercontent.com/3406462/234472296-7247c5a9-522a-4c64-81cc-781fc597fb28.png)

# Deployment using Docker and Docker Compose

1. Pull docker images for vite+react app and node-express-mongo server
   docker pull jekeytimoy38/camila-amber-movies-react:latest
   docker pull jekeytimoy38/camila-amber-movies-react:latest

2. Note that here's sample env variables for the node server
   MONGODB_URL=mongodb://mongo:27017/sample_mflix
   SERVER_PORT=8080

3. Build and run the docker-compose.yml file
   docker compose build
   docker compose up
