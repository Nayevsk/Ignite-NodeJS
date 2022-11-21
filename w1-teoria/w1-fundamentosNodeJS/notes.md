1- npm init -y || yarn init -y (Inicia configuracao de um package.json). - package.json vai armazener todas as dependencias utilizadas no projeto.
2- Adicionando o frammework Express -> yarn add express.
3- Instalando o Nodemon. O Nodemon eh utilizado para nao haver necessidade de reiniciar o servidor manualmente quando houver  qualquer alteracao no mesmo. Como o nodemon sera utilizado apenas para desenvolvimento e n producao, -D eh necessario.
 commando:  "yarn add nodemon -D"
Agora, eh necessario ir ao diretorio package.json e adicionar o seguinte script: 
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  apartir de agora, quando o comando "yarn dev" for utilizado, qualquer atualizacao do servidor sera refretida em localhost:3333.


----- HTTP REQUESTS --------

GET - Buscar uma informacao dentro do servidor.
POST - insere uma informacao dentro do servidor.
PUT - altera uma informacao no servidor.
PATCH - altera uma informacao especifica.
DELETE - Dele uma informacao do servidor.

----------- Request Params ----------

Route params => parametros definidos nas rotas (url). Identificar um recurso para editar || deletar || buscar.
Query params => Paginacao || Filtros. 
Body Params -> Os objetos insercao || alteracao (em JSON)