# Comandos 

- npm init // cria o package.json para iniciar um projeto node

- npm i * nome_pacote* // instala um pacote específico

- npm install ou npm i // instala todos os pacotes do package.json

- npm run nome_do_script// executa um script do package.json(apenas o  script "start" pode ignorar o nome_do_script )

NPM significa Node Package Manager- Gerenciador de Pacotes do Node
npm install zod // instala o zod
npm uninstall zod // desinstala o zod
npm update zod // atualiza o zod

NPX- executa um script
# Comandos 

// configura usuário e email do git na máquina
- git config --global user.name "Melissa alves"
- git config --global user.email "alves.melissa1@aluno.ifsp.edu.br"

- git init (inicia o git em uma pasta) 
- git remote add origin_url_do_github_ // vincula meu projeto local ao repositório do github

# Tópicos Importantes

- O que é framework
- O que é JavaScript
- O que é NPM (Node Package Manager)
- O que é node.js
- O que é o Express
- Protocolo http
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- Como mudar o formato de importção/exportação de require para import (Adicionar no package.json type:"module")
-- watch quando tem um erro no servidor ele irá atualizar?
--watch(parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

- Router (Para que separar as rotas?)

- Parâmetros 
- O que significa M V C ? (Mdel View Controller)
 Ele separa os códigos em 3 camada
 - Model: Acesso ao banco de dados, definir as regras de Negócio 
 - View: Uma camada de Vizualização a interface do user, função do front-end
 - Controller: entrada de dados, processamento dos dados, saída de dados

- O que é um padrão de projeto? (é uma forma de fazer a codificação maneira organizada que é amplamente conhecido mudialmente)





Sintaxe básica de uma rota de API 
 
 app.post('/produtos', (req, res) => {
  res.json({
    menssage: ' criado com sucesso!'})
  })

  - método: post (criar/inserir)
  - rota ou endereço: /produto
  - tipo de resposta: json
 
app.post('/profile')
app.get('/profile')
app.get('/profile/:id')
app.put('/profile/:id')
app.delete('/profile/:id/:name')

/profile

- Para que serve o Router ?
organização, manutenção e facilitar a manutenção dos códigos

-dia 30 prova backend e dia 23 revisão

prisma é um ORM...
uma ferramenta para Node.js e TypeScript que facilita a interação com bancos de dados.

- o que é uma ORM?
(
  O: objeto  
  R: relational
  M: model
)
 (serve para simplificar a interação entre aplicação e banco de dados)

 - Dependencias dev  fazem partes e são do desenvolvimeto do projeto(ajuda)/ ja as dependencias fazem parte do projeto interno

- prisma: mapeammento de backend e banco de dados



## Comandos do Prisma 

- Instalação do prisma
(
  npm i prisma -D --passo 1
  npm prisma i @prisma/client --passo 2
)

- Inicializar o prisma 
(
    npx prisma init
)

- Gerar o model do prisma a partir de um BD existente

(
    npx prisma db pull
)

- Gerar o BD  a partir de um model do prisma 

(
    npx prisma db push
)

- Gerar os arquivos necessários para usar o prisma client no código

(
   npx prisma generate 
)

## Padrão de projeto Middleware

- Middleware é um padrão de projeto
    
     objeto agrupa varias funcoes (grupo de valores)

  # resposta 

  
- O que é framework?
  Um framework é uma estrutura de suporte que facilita o desenvolvimento de software, fornecendo uma base sobre a qual os desenvolvedores podem construir aplicações.

- O que é JavaScript?
  JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas web. É uma linguagem de script do lado do cliente, mas também pode ser usada no lado do servidor.

- O que é NPM (Node Package Manager)?
  NPM é um gerenciador de pacotes para a plataforma Node.js, que permite aos desenvolvedores instalar, compartilhar e gerenciar dependências de projetos JavaScript.

- O que é node.js?
  Node.js é um ambiente de execução JavaScript do lado do servidor, que permite aos desenvolvedores criar aplicações web escaláveis e de alto desempenho.

- O que é o Express?
  Express é um framework web para Node.js que simplifica o desenvolvimento de aplicações web e APIs, fornecendo uma série de recursos e funcionalidades prontas para uso.

- Protocolo http
  HTTP (Hypertext Transfer Protocol) é o protocolo de comunicação usado na web para transferir dados entre clientes (navegadores) e servidores.

- Métodos http (GET, POST, PUT, PATCH, DELETE)

- Como mudar o formato de importção/exportação de require para import (Adicionar no package.json type:"module")
  Adicionar "type": "module" no package.json permite o uso da sintaxe de módulos ES6 (import/export) em vez da sintaxe CommonJS (require/module.exports).

- oque  é GET, POST, PUT, PATCH, DELETE
  GET: Recupera/lista dados do servidor.
  POST: Envia dados para o servidor para criar um novo recurso.
  PUT: Atualiza um recurso existente no servidor.
  PATCH: Atualiza parcialmente um recurso existente no servidor.
  DELETE: Remove um recurso do servidor.

  - -- watch quando tem um erro no servidor ele irá atualizar?
  Sim, o --watch reinicia o servidor automaticamente quando detecta alterações nos arquivos.

  - Router (Para que separar as rotas?)
  Separar as rotas usando Router ajuda a organizar o código, facilitando a manutenção e a escalabilidade da aplicação.

  node é um ambiente que está rodando no express

  - padrao de projeto middleware: é um padrão de projeto que agrupa várias funções (grupo de valores) (middleware no codigo é uma função que tem acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função de middleware no ciclo de solicitação-resposta da aplicação. )

   - Dependencias dev  fazem partes e são do desenvolvimeto do projeto(ajuda)/ ja as dependencias fazem parte do projeto interno

- prisma: mapeammento de backend e banco de dados

prisma é um ORM...
uma ferramenta para Node.js e TypeScript que facilita a interação com bancos de dados.

- o que é uma ORM?
(
  O: objeto  
  R: relational
  M: model
)
 (serve para simplificar a interação entre aplicação e banco de dados)

