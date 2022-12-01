---- Como iniciar um projeto -------

1- 'yarn init -y' -> inicia o package.json 

2- 'yarn add express' -> adiciona dependencias do express no programa.

3 - Como TS esta sendo usando o comando 'yarn add @types/express -D' foi necessario para
    liberar as "dicas" do VScode.

4 - yarn add typescript -D, foi utilizado para se ter acesso ao proximo comando.

5 - yarn tsc --init comando usado para criar o arquivo tsconfig.json que sera alterado frequentemente.

6 - Seguir os passos para instalar o prittier + eslint : https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779

7 - Installar o ts-node-dev : "yarn add ts-node-dev -D". Apos isso:
    Ir a package.json e adicionar:
     "script"{
      "dev":"ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts".  
     }
    
8 - Ir no tsconfig e desabilitar(comentar) "strict":true.

9 - Setting debbug: Debbug --> create a launch.json file e modifica para ficar assim:
        "configurations": [
            {
            "type": "node",
            "request": "attach",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
            }
        ]
    Como usar: roda o servidor, coloca break points, run debbuger e fazer requests.
     
10 - 


