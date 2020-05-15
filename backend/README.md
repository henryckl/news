# API

## Gerando migrations

Comando para gerar a migration create_user_table:

    yarn run typeorm:cli migration:generate -n create_user_table

## Executando e revertendo migrations

Comando para executar migration e criar tabela __user__:

    yarn run typeorm:cli migration:run

Comando para reverter a migration:

    yarn run typeorm:cli migration:revert
