# Modulo de usuários (users)

## Precisamos criar

    - users.module.ts
    - users.controller.ts
    - users.service.ts

- users.module.ts:
  - definir a classe do modulo (X)
  - exportar nossa classe (X)
  - colocar o decorator de modulo (X)
  - colocar as informações que o decorador deve receber (X)

##

- users.controller.ts
  - definir a classe do controller (X)
  - exportar nossa classe (X)
  - colocar o decorator do controller (X)
  - definir a rota do controller (X)
  - criar o construtor, relacionando o service (X)
  - definir as nossas rotas
    - read all
    - create
  - colocar a chamada das funções do service nas rotas

##

- users.service.ts
  - definir a classe do service
  - exportar nossa classe
  - colocar o decorator do service
  - definir os metodos que estão sendo utilizados pleo controller
