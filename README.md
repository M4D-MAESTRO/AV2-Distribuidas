# Trabalho AV2 - Desenvolvimento de aplicações distribuídas

## Grupo:
    Luís Henrique de C. Corrêa - 2017102465
    Lucas Guimarães Cavalheiro - 2012200347
    Felipe Bento Xavier - 2017102868
    Eric Mencarini - 2018101101
    

## Instruções para rodar o projeto:

### Produção:

Basta rodar o comando `prod:launch` usando seu package manager de preferência (npm ou yarn). Docker e docker-compose são necessários.

### Desenvolvimento:

1. Usando o seu package manager preferido (npm/yarn) rodar `npm i` ou `yarn install` (para as instruções, utilizamos o yarn);

2. Rodar o comando `yarn dev:bd` e esperar o docker subir e inicializar o container postgre. Apenas o docker é necessário no ambiente de desenvolvimento;

3. Rodar `yarn typeorm migration:run` para executar as migrations;

4. Rodar `yarn serve`, para servir a API;

ATENÇÃO: O projeto utiliza o banco na porta 5432 (produção) ou 6543 (desenvolvimento), a api pode ser acessada em http://localhost:3333 em ambos os ambientes. Também é possível utilizar o postgre instalado localmente, mas será necessário alterar o arquivo ormconfig.js e criar o database 'av2' antes de realizar as migrações.

## Users

| HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /users   | Cria um novo usuário | - | - | - |

## Sessions

| HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /sessions   | Cria um token assinado | - | - | - |

## Disciplines

| HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /disciplines   | Cria uma nova disciplina | Lista todas as disciplinas (simples) | Atualiza uma disciplina | - |
| /disciplines/:id   | - | Recupera uma disciplina (completa) | - | Deleta uma disciplina |

## Hardskill

| HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /disciplines/:id/hardskill   | Cria uma nova Hardskill e automaticamente, adiciona à disciplina | - | - | - |




PS: Há um arquivo chamado "Requests - AV2.json", que você pode usar para importar os requests semi-prontos
