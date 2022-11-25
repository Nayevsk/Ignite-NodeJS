-------------- Debuggando o Codigo ---------------

1 - Para configurar o debug, ir ate a aba debug no VScode e clicar na engrenagem, isso vai abrir o "launch.json".
    la dentro muda-se: 
      "type": "node",
      "request": "attach",
    se algo der erro apos a alteracao, apenas deleta-se.

2 - Ir ate package.json e adicionar --inspect apos ts-node-dev. Vai ficar assim:
    "dev":"ts-node-dev --inspect --transpile-only --poll --ignore-watch node_modules --respawn src/server.ts"