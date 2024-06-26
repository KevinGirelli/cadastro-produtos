## Sistema de Cadastro de Produtos com Angular 17 e Backend em Spring

Este projeto é uma aplicação simples que permite cadastrar e visualizar produtos.

### Funcionalidades

#### Cadastro de Produtos:
- Preencha os campos obrigatórios: nome do produto, categoria e mercado.
- Clique no botão "Cadastrar Produto".
- O produto será adicionado à lista de produtos cadastrados.

#### Visualização de Produtos:
- Todos os produtos cadastrados são exibidos em uma tabela na página de listagem.

### Pré-requisitos

- Node.js e Angular CLI 17 instalados.
- JDK e Maven instalados para executar o backend em Spring.

### Como Executar

#### Frontend (Angular)

1. Clone o Repositório:
   ```bash
   git clone https://github.com/KevinGirelli/cadastro-produtos.git
   cd cadastro-produtos/frontend/angular_files

2. Instale as Dependências e Inicie o Servidor:
    ```bash
    npm install
    ng serve

3. Acesse a Aplicação:

    Abra o navegador e visite http://127.0.0.1:4200.

#### Backend (Spring)

1. Navegue até o diretório do projeto backend:

    ```bash
    cd cadastro-produtos/\backend\src\main\java\com\spring\backend

2. Abra o arquivo **BackendApplication.java**.
3. Execute a aplicação Spring executando a classe principal.
4. Certifique-se de que a aplicação está em execução.

#### Acessando a Aplicação

  Uma vez que ambos os servidores estejam em execução, acesse a aplicação em http://127.0.0.1:4200.

  Certifique-se de que ambos os servidores estejam em execução simultaneamente para garantir a comunicação adequada.
