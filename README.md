# Comandos 

- npm init // cria o package.json para iniciar um projeto node

- npm i * nome_pacote* // instala um pacote específico

- npm install ou npm i // instala todos os pacotes do package.json

- npm run nome_do_script// executa um script do package.json(apenas o  script "start" pode ignorar o nome_do_script )

NPM significa Node Package Manager- Gerenciador de Pacotes do Node


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


## Comandos do Prisma 

- Instalação do prisma
(
  npm i prisma - D --passo 1
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