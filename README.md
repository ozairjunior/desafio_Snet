# desafio_Snet
Repositório destinado ao desafio serviceNet

Usando o yarn:
-Instalando yarn: yarn install
-Executar o projeto: yarn dev

A url base é: https://snet-back-end.herokuapp.com/

Estou usando o postgres para o banco de dados
com o pgAdim executando, você ira usar as seguintes urls:

Para registrar usuário:
-Usar a url: https://snet-back-end.herokuapp.com/user/register, e informar nome, e-mail e uma senha no formato JSON.

Para o usuário logar:
-Usar a url: https://snet-back-end.herokuapp.com/user/login, informando o e-mail e senha no formato JSON.

Para buscar usuário:
-Usar a url: https://snet-back-end.herokuapp.com/user.

Para editar um cliente:
-Usar a url: https://snet-back-end.herokuapp.com/customer/n, (o n será o id do cliente que deseja editar) informando qual o campo que será editado no formato JSON.

Para listar todos os clientes:
-Usar a url: https://snet-back-end.herokuapp.com/customer

Para criar cliente:
Usar a url: https://snet-back-end.herokuapp.com/customer, e preencher os campos em formato JSON.

Para deletar um cliente:
-Usar a url: https://snet-back-end.herokuapp.com/customer/n, (o n será o id do cliente que deseja ser excluído).

Para buscar um cliente:
-Usar a url: https://snet-back-end.herokuapp.com/customer/n, (o n será o id do cliente que deseja buscar).
