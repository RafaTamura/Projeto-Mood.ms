<h1 align="center"> Mood.ms </h1>
Bem-vindo! Este projeto é uma plataforma de gerenciamento de músicas chamada Mood.ms. Aqui, você pode cadastrar músicas e filtrá-las com base no seu "mood" atual, ou seja, nos seus sentimentos. Por exemplo, se você estiver feliz e quiser ouvir algo mais animado, basta inserir o seu mood e o sistema retornará as músicas adequadas. Para ouvi-las, basta pressionar o botão correspondente ao cadastro.
<hr>
Neste projeto, foram utilizados conhecimentos de criação e consumo de API, empregando o framework Entity e o SQL Server como banco de dados, além dos frameworks Angular e Bootstrap para o front-end.
<hr>
Segue algumas imagens da aplicação em funcionamento.

### Tela Inicial 
Aqui tem uma breve introdução de como utilizar a aplicação seguindo os passos dos cards. 
![telaInicial](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/b570834f-e39b-4214-8d4a-94d6dc63becc)
![telaInicial2](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/3fc6af0a-02c7-4bbc-bc01-a568fb2f3097)

### Músicas
Nesta aba é onde ocorre o cadastro das músicas, ele solicita o Nome da música, Artista, Estilo musical, como você se sente ao ouvir determinada música e o link por onde você costuma ouvir.
![cadastrarMusica](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/bb7dfb0e-310e-4deb-9f85-fe38ea1aa2eb)
![musicasCadastradas](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/43a68959-7cbf-4b24-b59d-f0cf5fd44638)


### Perfil 
Na aba perfil caso não esteja cadastrado ele aparece a opção de novo cadastro, porém caso já esteja cadastrado ele informa os dados do usuário, com a opção de Sair ou Alterar

![formularioCadastroPerfil](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/4a19d83f-17ea-4ac5-a6a1-876c4d945a9e)
![perfilCadastrado](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/4ddecac4-8a8a-44f3-9e5a-598140c266b3)

### Mood!
Agora temos a aba principal! Onde ele informa os sentimentos cadastrados e o usuário informa qual que ele está sentindo no momento, para que retorne as músicas relacionadas a aquele sentimento.
![mood](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/8d87dcfa-9d61-487e-8766-30dc6a90ad8c)
![Screenshot (11)](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/70594217-1269-4bd7-85ce-d2c33bf0eddb)

### Sobre
Nesta aba temos mais informações sobre o projeto, sua finalidade, tecnologias utilizadas e um agradecimento a todos que me auxiliaram para que este projeto tenha saído do papel.
![sobre](https://github.com/RafaTamura/Projeto-Mood.ms/assets/104770869/0a8ac830-9fb3-45a4-a522-6ea40db78c20)



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




