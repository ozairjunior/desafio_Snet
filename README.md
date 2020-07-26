# desafio_Snet
Repositório destinado ao desafio serviceNet

Usando o yarn:
-Instalando yarn: yarn install
-Executar o projeto: yarn dev

A url base é: http://localhost:3000

Estou usando o postgres para o banco de dados
com o pgAdim executando você usa as seguintes urls:

Para registrar usuário:
-Usar a url: http://localhost:3000/user/register, e informar nome, e-mail e uma senha no formato JSON.

Para o usuário logar:
-Usar a url: http://localhost:3000/user/login, informando o e-mail e senha no formato JSON.

Para buscar usuário:
-Usar a url: http://localhost:3000/user.

Para editar um cliente:
-Usar a url: http://localhost:3000/customer/n, (o n será o id do cliente que deseja editar) informando qual o campo que será editado no formato JSON.

Para listar todos os clientes:
-Usar a url: http://localhost:3000/customer

Para criar cliente:
Usar a url: http://localhost:3000/customer, e preencher os campos em formato JSON.

Para deletar um cliente:
-Usar a url: http://localhost:3000/customer/n, (o n será o id do cliente que deseja ser excluído).

Para buscar um cliente:
-Usar a url: http://localhost:3000/customer/n, (o n será o id do cliente que deseja buscar).
