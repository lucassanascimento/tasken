## :wrench: API desenvolvida utilizando a arquitetura DDD

## :wrench: Tecnologias

:red_circle: Node

## :wrench: Ferramentas

:large_orange_diamond: ESLint
:large_orange_diamond: Lint Staged
:large_orange_diamond: Ts Node Dev
:large_orange_diamond: Prettier
:large_orange_diamond: Express
:large_orange_diamond: Faker
:large_orange_diamond: Tsyringe
:large_orange_diamond: Celebrate
:large_orange_diamond: Uuidv4
:large_orange_diamond: Commit Linter
:large_orange_diamond: Husky
:large_orange_diamond: TypeORM
:large_orange_diamond: Swagger
:large_orange_diamond: Docker

## Banco Dados

:paperclip: PostgreSQL

> ## APIs funcionalidades

1. :heavy_check_mark: [Criar Produto](./requirements/create-user.md)
2. :heavy_check_mark: [Alterar Produto](./requirements/session-user.md)
3. :heavy_check_mark: [Buscar Produtos](./requirements/add-favorite-product.md)
4. :heavy_check_mark: [Buscar Produtos por ID](./requirements/add-favorite-product.md)
5. :heavy_check_mark: [Deletar Produto](./requirements/remove-favorite-product.md)
6. :heavy_check_mark: [Obter Quantidade de Produto em estoque](./requirements/list-favorite-products.md)
7. :heavy_check_mark: [Obter Produto com menor Estoque](./requirements/list-favorite-products.md)
8. :heavy_check_mark: [Obter Produto com maior Estoque](./requirements/list-favorite-products.md)
9. :heavy_check_mark: [Obter Produto sem Estoque](./requirements/list-favorite-products.md)

## :ballot_box_with_check: Executando o projeto

!!! Para executar os comandos abaixo é preciso ter o docker instalado, caso tenha o postgres instalado pode pular esses passos.
</br>
:heavy_check_mark: Criando container do banco postgres no docker
escolher a porta 5433, caso esteja em uso você pode optar por usar outra.
<br>

`docker run --name postgres -e POSTGRES_PASSWORD=tasken -p 5433:5432 -d postgres:11`

:heavy_check_mark: Para podar o container do postgres:
<br>

` docker start postgres`

:heavy_check_mark: Banco de dados

<p> Crie um banco de dados com o nome 'postgres'. Caso você tenha optado por credenciais diferentes das citadas acima, altere-as no arquivo 'ormconfig.json' </p>

:heavy_check_mark: Criando o Banco de dados
`yarn typeorm migrations:run`

## :ballot_box_with_check: Rodando nossa API

Antes de executar esse comando verifique se seu banco de dados está rodando </br>
`yarn dev:server`
