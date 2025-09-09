# node.js 18, pour utiliser react dans le front par la suite
FROM node:18-alpine

#repertoire de travil dans conteneur docker
WORKDIR /app

#copie les bibliothèques
COPY package*.json ./

# installe les biblio
RUN npm install

# Copie frontend dans conteneur
COPY . .

#port 3000 pour React
EXPOSE 3000

#start node
CMD ["npm", "start"]
