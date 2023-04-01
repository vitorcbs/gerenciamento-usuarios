<h1>Desafio Processo Seletivo</h1>
Este repositório contém o projeto desenvolvido como parte do processo seletivo da empresa Confitec.

<h2>Sobre o Projeto</h2>
<p>   O projeto consiste em um sistema simples de cadastro de usuários, que permite a criação, edição, visualização e exclusão de usuários. O front-end foi desenvolvido em Angular, utilizando HTML e CSS para a interface visual. Para simular uma API RESTful, foi utilizado o pacote json-server. Além disso, foram utilizados alguns ícones do PrimeNG.</p>

<ul><h2>Tecnologias Utilizadas</h2>
<li>Angular</li>
<li>HTML</li>
<li>CSS</li>
<li>json-server</li>
<li>PrimeNGIcons</li>
</ul>

<h2>Configuração do Banco de Dados</h2>
Para a criação do banco de dados, deve ser utilizada a seguinte query:

<p><br>SQL</p>

CREATE TABLE Usuarios (
<br>Id INT PRIMARY KEY IDENTITY(1,1),
<br>Nome VARCHAR(50) NOT NULL,
<br>Sobrenome VARCHAR(50) NOT NULL,
<br>Email VARCHAR(100) NOT NULL,
<br>DataNascimento DATE NOT NULL,
<br>Escolaridade INT NOT NULL
<br>);

<h2>Agradecimentos</h2>
<p> Gostaria de agradecer à empresa Confitec pela oportunidade de participar do processo seletivo. Durante o desenvolvimento do projeto, pude aprender muito sobre as tecnologias utilizadas e aprimorar minhas habilidades de desenvolvimento. Obrigado pela oportunidade!</p>

<br>Atenciosamente,<br>
Vitor Contine Barros Souza
