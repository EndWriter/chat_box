# Node.js
FROM node:24-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie package.json
COPY package*.json ./

# Installe
RUN npm install

# Copie le code de l'application
COPY . .

# Expose le port
EXPOSE 3000

# startup
CMD ["npm", "run", "dev"]
    