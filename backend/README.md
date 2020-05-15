# API

## Gerando migrations

Comando para gerar a migration create_user_table:

    yarn run typeorm:cli migration:generate -n create_user_table

## Executando migrations

Comando para executar migration e criar tabela __user__:

    yarn run typeorm:cli migration:run
