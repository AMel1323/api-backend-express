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
-O que é JavaScript
- O que é NPM (Node Package Manager)
- O que é node.js
- O que é o Express
- Protocolo http
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- como mudar o formato de importção/exportação de require para import (Adicionar no package.json type:"module")

--watch(parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

sintaxe básica de uma rota de API 
 
 app.post('/produtos', (req, res) => {
  res.json({
    menssage: ' criado com sucesso!'})
  })

  - método: post (criar/inserir)
  - rota ou endereço: /produto
  - tipo de resposta: json
 
