<h1 align="center"> Mood.ms </h1>
Bem Vindo!! Este projeto é uma plataforma musical gerenciado de músicas. 
<hr>
Aqui você pode cadastrar músicas e pode filtrar conforme o seu "mood" no momento (conforme seus sentimentos).
Por exemplo, caso esteja feliz e queira ouvir algo mais animado, basta colocar o que sente no seu mood e ele irá retornar suas músicas, e para poder ouvir <br>
basta apertar o botão que ele irá encaminhar conforme foi realizado no cadastro.

Neste projeto foi utilizado os conhecimentos de criação e consumo de API, utilizando o framework Entity, SQL Server como banco de dados e os frameworks Angular e bootstrap para o front-end.

### Passo a Passo
- Para a criação deste projeto foi criado o banco de dados no SQL server
- Logo em seguida foi realizada a configuração do ambiente no Visual Studio com o framework <b>ASP.Net Web API</b> para a criação da API.
- Instalação dos pacotes do Entity Framework (permite que possamos trabalhar com dados na forma de objetos e propriedades) os pacotes foram o <br>
Entity Framework Core, Proxies, SqlServer e o Tools.
- Agora podemos começar com as classes com os dados que os objetos recebem como as Músicas e os Usuarios, os controllers do usuario e musica (define a resposta que o usuário irá receber após realizar uma solicitação) e as configurações do caminho do banco de dados (neste caso foi especificado o caminho no appsettings.json) e a classe Contexto, que configura o caminho para o Banco de dados e por último configura a Program.cs que configura diversos aspectos da aplicação, como o cors, Swagger, redirecionamento do HTTP para HTTPS e autorização, além de mapear as controllers.
- Nesta trajetória foi utilizado o Code First, na qual definimos o banco de dados utilizando classes do C#. 
- Na pasta tabelas existe separadamente a forma como foram criadas as tabelas do banco de dados.
- Com as configurações do banco de dados feitas, é criada a pasta Migrations com o comando Add-Migration (nome da migration) na terminal do visual studio, se realizado com sucesso a aplicação conseguiu criar uma migração no banco de dados, logo após é utilizado o comando Update-Database, para atualizar o banco de dados com as alterações da migration.
###Front
- Após toda a API respondendo corretamente é o momento de utilizar o Angular para a criação do front-end da aplicação.
- É realizada a instalação do Node e do npm, na qual funciona como um gerenciador de pacotes. A instalação pode ser realizada no link a seguir <a href="https://nodejs.org/pt-br/download"> Instalação Node</a>.
- Agora para a instalação do Angular é só utilizar o comando <b> npm install @angulalr/cli</b>
- Para criar um projeto novo é só utilizar o ng do Angular, <b> ng new Mood.ms</b>.
- Neste projeto todas as configurações para conectar o front com a API foram realizadas nos arquivos services de cada componente, e as rotas ajustadas no app-routing.module.ts.

<hr>

Segue algumas imagens da aplicação em funcionamento.



