---- Como iniciar um projeto -------

1- 'yarn init -y' -> inicia o package.json 

2- 'yarn add express' -> adiciona dependencias do express no programa.

3 - Como TS esta sendo usando o comando 'yarn add @types/express -D' foi necessario para
    liberar as "dicas" do VScode.

4 - yarn add typescript -D, foi utilizado para se ter acesso ao proximo comando.

5 - yarn tsc --init comando usado para criar o arquivo tsconfig.json que sera alterado frequentemente.

6 - Seguir os passos para instalar o prittier + eslint : https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779

7 - Installar o ts-node-dev : "yarn add ts-node-dev -D", vai instalar a dependencia.
    is a package.json e criar:
     "script"{
      "dev":"ts-node-dev --transpile-only --poll --ignore-watch node_modules --respawn src/server.ts".  
     }
    O --poll eh adicionado se estiver rodando o projeto numa wsl.

8 - Para evitar que apareca uma mensagem de error caso pule 2 linhas, ir a eslintrc.json e alterar "prittier/prittier":0.

OBS: 
  - Para rodar o codigo usando o node, eh necessario "traduzir" esse codigo do TS para JS. Para realizar
    esse processo utiliza-se o comando 'yarn tsc'. Esse comando traduz cada arquivo TS para JS, de forma que no caso de haver 10 arquivos TS serao criados outros 10 JS no mesmo path. 
    
    Por isso eh necessario ir a tsconfig no script "outDir" e alterar esse path para outro lugar. Desta forma, toda traducao para JS que ocorrer sera direcionada para essa pasta, evitando a aglomeracao de arquivos num mesmo path.

---------------- Criando a Primeira API -----------------
