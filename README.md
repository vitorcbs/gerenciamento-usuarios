Desafio Processo Seletivo
Este repositório contém o projeto desenvolvido como parte do processo seletivo da empresa Confitec.

Sobre o Projeto
O projeto consiste em um sistema simples de cadastro de usuários, que permite a criação, edição, visualização e exclusão de usuários. O front-end foi desenvolvido em Angular, utilizando HTML e CSS para a interface visual. Para simular uma API RESTful, foi utilizado o pacote json-server. Além disso, foram utilizados alguns ícones do PrimeNG.

Tecnologias Utilizadas
Angular
HTML
CSS
`json-server`
`PrimeNG`

Configuração do Banco de Dados
Para a criação do banco de dados, deve ser utilizada a seguinte query:

sql
Copy code
CREATE TABLE Usuarios (
  Id INT PRIMARY KEY IDENTITY(1,1),
  Nome VARCHAR(50) NOT NULL,
  Sobrenome VARCHAR(50) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  DataNascimento DATE NOT NULL,
  Escolaridade INT NOT NULL
);

Agradecimentos
Gostaria de agradecer à empresa Confitec pela oportunidade de participar do processo seletivo. Durante o desenvolvimento do projeto, pude aprender muito sobre as tecnologias utilizadas e aprimorar minhas habilidades de desenvolvimento. Obrigado pela oportunidade!

Atenciosamente,
Vitor Contine Barros Souza
