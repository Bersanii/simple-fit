# Typeorm Migrations Generator

As configurações de compiling do typescript necessárias para o Vue são incompatíveis com as necessárias para executar alguns comandos de automação do typeorm. 

Ao tentar rodar o comando de generate migrations no typeorm temos erros devido as configurações impostas pelo Vue no tsconfig.node.json, especificamente ```compilerOptions.module = ESNext```
(https://github.com/typeorm/typeorm/issues/10107)

A solução foi criar um projeto separado para gerar os migrations. As configurações do Data Source foram modificadas para um banco **SQLite** genérico

### Uso
- Colocar as entidades pasta ```src/entity``` 
    - Caso seja necessário levar em conta os migrations anteriores, adiciona-los na pasta ```src/migration```
- Executar o comando: ```npm run typeorm migration:generate -- -d .\src\data-source.ts .\src\migration\<nome do migration>```

### Extra info

Esse projeto foi criado usando ```typeorm init``` para não existir a possibilidade de erros na geração dos migrations. (https://typeorm.io/using-cli#installing-cli)

Referência original do ```migration:generate``` https://typeorm.io/migrations#generating-migrations
