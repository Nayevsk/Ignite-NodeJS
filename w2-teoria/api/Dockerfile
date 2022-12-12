# Escolhe a imagem
FROM node

# cria diretorio onde sera copiado o projeto
WORKDIR /usr/app

# copia inicialmente so a lista de dependencias do projeto
COPY package.json ./

#instala as dependencias copiadas
RUN npm install

#copia restante dos arquivos
COPY . .

# habilita a porta 3333 do container, porta utilizada no projeto.
EXPOSE 3333

#executra o comando que vai iniciar o servirdor API.
CMD ["npm","run","dev"]

# para constrir o container eh preciso rodar o comando:
# docker build -t carRental .   (onde o . representa o path onde se encontra o "Dockerfile").
# logo apos, para iniciar a API no docker, use o comando: "docker run -p 3333:3333 rentx" => -p realiza um
# mapeamento, a chamada da porta 3333 no cmd vai criar uma busca de ativacao da porta 3333 do docker.
# para verificar quais portas estao ativar, usar: "docker ps"
# para acessar a pasta /usr/app criar usar o comando: "docker exec -it elastic_proskuriakova /bin/bash", onde 
# elastic_proskuriakova eh o nome do container.