---- Como iniciar o codigo em TS -------

1 - Como TS esta sendo usando o comando 'yarn add @types/express -D' foi necessario para
    liberar as "dicas" do VScode.

2- yarn add typescript -D, foi utilizado para se ter acesso ao proximo comando.

3- yarn tsc --init comando usado para criar o arquivo tsconfig.json que sera alterado frequentemente.

OBS: 
  - Para rodar o codigo usando o node, eh necessario "traduzir" esse codigo do TS para JS. Para realizar
    esse processo utiliza-se o comando 'yarn tsc'. Esse comando traduz cada arquivo TS para JS, de forma que no caso de haver 10 arquivos TS serao criados outros 10 JS no mesmo path. 
    
    Por isso eh necessario ir a tsconfig no script "outDir" e alterar esse path para outro lugar. Desta forma, toda traducao para JS que ocorrer sera direcionada para essa pasta, evitando a aglomeracao de arquivos num mesmo path.    