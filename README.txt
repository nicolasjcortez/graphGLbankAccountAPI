API GraphQL em NodeJS simulando uma conta bancaria utilizando MongoDB

Seguem dois arquivos(colections do Postman) de testes para as querys e mutations da API desenvolvida.
Esses arquivos servem como exxemplos e já fazem parte da documentação.

Arquivo com testes para aplicação rodando local: BankAccount_Local.postman_collection 

Arquivo com testes da aplicação rodando no Azure: BankAccountAzure.postman_collection.json


No código do git temos a aplicação como se fosse consumir um banco local, para não divulgar a senha do banco.
No entanto, a aplicação do Azure consome um banco no servidor.(String de conexão comentada no codigo a com senha rasurada).

Além dos testes temos o arquivo com o schema da API: instrospectionSchema.json

