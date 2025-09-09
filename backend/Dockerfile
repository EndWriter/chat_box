#Python pour BACK
FROM python:3.13-slim

# répertoire de travail dans le conteneur
WORKDIR /app

#copie les bibliothèques
COPY requirements.txt .

# installe les biblio depuuis requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# fais une copie de tout le code du backend
COPY . .

#port 8000 pour Django (utile pour django par la suite)
EXPOSE 8000

#start Django 
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
