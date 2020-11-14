# Trabalho AV2 - Desenvolvimento de aplicações distribuídas

## Grupo:
    Luís Henrique de C. Corrêa - 2017102465
    Lucas Guimarães Cavalheiro - 2012200347
    Felipe Bento Xavier - 2017102868
    Eric Mencarini - 2018101101
    

## Instruções para rodar o projeto:

1. Usando o seu package manager preferido (npm/yarn) rodar `npm i` ou `yarn install`;

2. Rodar `yarn typeorm migration:run` para executar as migrations;

3. Rodar `yarn dev:server`, para servir a API que poderá ser acessado por http://localhost:3333;

ATENÇÃO: O projeto utiliza um banco (Postgre) na porta 5432 (aqui eu utilizo no Docker)

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
