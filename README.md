# FindAFriendAPI

A API permite CRUD de Orgs e Pets, com busca por cidade e tipo de pet. Os dados são armazenados em um banco de dados e há autenticação de usuário. Documentação completa é fornecida para integração.

## API para CRUD de Orgs e Pets

Esta é uma API que permite o gerenciamento de Orgs e Pets, com a possibilidade de cadastro, leitura, atualização e exclusão de dados.

Os pets são cadastrados nas Orgs para que fiquem disponíveis para adoção. Há ainda rotas de busca por cidade e tipo de pet, permitindo que os usuários encontrem facilmente as Orgs e Pets desejados.

Os dados são armazenados em um banco de dados e a API é segura, com autenticação de usuário. Há documentação completa disponível para integração em projetos externos.

## Endpoints Disponíveis

    - GET /orgs: Retorna todas as Orgs cadastradas

    - GET /orgs/:id: Retorna uma ONG específica pelo ID

    - POST /orgs: Cria uma nova ONG

    - PUT /orgs/:id: Atualiza uma ONG existente pelo ID

    - DELETE /orgs/:id: Exclui uma ONG existente pelo ID

    - GET /orgs/cidade/:cidade: Retorna todas as Orgs cadastradas em uma cidade específica

    - GET /pets: Retorna todos os Pets cadastrados

    - GET /pets/:id: Retorna um Pet específico pelo ID

    - POST /orgs/:ong_id/pets: Cria um novo Pet e seus requerimentos, e o mesmo deve ser vinculado a uma ONG existente 

    - PUT /pets/:id: Atualiza um Pet existente pelo ID

    - DELETE /pets/:id: Exclui um Pet existente pelo ID

    - GET /pets/tipo/:tipo: Retorna todos os Pets de um tipo específico

## Instalação e Configuração

    - Faça o clone deste repositório em sua máquina local
    - Instale as dependências do projeto com o comando ```npm install```
    - Rode as migrations: npm prisma migrate dev
    - Renomeie o arquivo .env.example para .env e preencha as variáveis de ambiente necessárias
    - Inicie o servidor com o comando ```npm run dev```

# Tecnologias utilizadas

O sistema foi desenvolvido utilizando as seguintes tecnologias:

    - Node.js
    - fastify
    - Postgres
    - PrismaIO

# Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.



## TODO

[x] Deve ser possível cadastrar um pet
[x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
[x] Deve ser possível filtrar pets por suas características
[x] Deve ser possível visualizar detalhes de um pet para adoção
[x] Deve ser possível se cadastrar como uma ORG
[x] Deve ser possível realizar login como uma ORG


## Regras de negócio

[] Para listar os pets, obrigatoriamente precisamos informar a cidade
[x] Uma ORG precisa ter um endereço e um número de WhatsApp
[x] Um pet deve estar ligado a uma ORG
[] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
[x] Todos os filtros, além da cidade, são opcionais
[x] Para uma ORG acessar a aplicação como admin, ela precisa estar logada