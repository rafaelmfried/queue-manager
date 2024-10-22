# Dockerfile.dev

# Usa a imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expondo a porta que a aplicação vai rodar
EXPOSE 3004

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "start:dev"]
