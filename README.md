<h1 align="center"> Mood.ms </h1>
Bem-vindo! Este projeto é uma plataforma de gerenciamento de músicas chamada Mood.ms. Aqui, você pode cadastrar músicas e filtrá-las com base no seu "mood" atual, ou seja, nos seus sentimentos. Por exemplo, se você estiver feliz e quiser ouvir algo mais animado, basta inserir o seu mood e o sistema retornará as músicas adequadas. Para ouvi-las, basta pressionar o botão correspondente ao cadastro.
<hr>
Neste projeto, foram utilizados conhecimentos de criação e consumo de API, empregando o framework Entity e o SQL Server como banco de dados, além dos frameworks Angular e Bootstrap para o front-end.
<hr>

### Passo a Passo
- Criação do banco de dados no SQL Server.
- Configuração do ambiente no Visual Studio, utilizando o framework ASP.Net Web API para criar a API.
- Instalação dos pacotes do Entity Framework (Entity Framework Core, Proxies, SqlServer e Tools), que permitem trabalhar com dados na forma de objetos e propriedades.
- Definição das classes para as entidades Musicas e Usuarios, criação dos controllers para usuários e músicas (que definem as respostas às solicitações dos usuários) e configuração do caminho do banco de dados no arquivo appsettings.json.
- Criação da classe Contexto, que configura a conexão com o banco de dados.
- Configuração da classe Program.cs, responsável por diversos aspectos da aplicação, como cors, Swagger, redirecionamento HTTP para HTTPS e autorização, além de mapear os controllers.
- Utilização do Code First para definir o banco de dados utilizando classes em C#.
- Criação da pasta Migrations com o comando Add-Migration (nome da migration) no terminal do Visual Studio, seguido pelo comando Update-Database para atualizar o banco de dados com as alterações da migração.
<h2>Front-end </h2>

Após verificar que a API está funcionando corretamente, é hora de utilizar o Angular para criar a interface do usuário.
<hr>
- Após toda a API respondendo corretamente é o momento de utilizar o Angular para a criação do front-end da aplicação. <br>
- É realizada a instalação do Node e do npm, na qual funciona como um gerenciador de pacotes. A instalação pode ser realizada no link a seguir <a href="https://nodejs.org/pt-br/download"> Instalação Node</a>. <br>
- Agora para a instalação do Angular é só utilizar o comando <b> npm install @angulalr/cli</b> <br>
- Para criar um projeto novo é só utilizar o ng do Angular, <b> ng new Mood.ms</b>. <br>
- Neste projeto todas as configurações para conectar o front com a API foram realizadas nos arquivos services de cada componente, e as rotas ajustadas no app-routing.module.ts.

<hr>

Segue algumas imagens da aplicação em funcionamento.



