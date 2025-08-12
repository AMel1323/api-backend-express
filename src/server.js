import express from 'express'

const app = express()
const port = 3333

app.use(express.json())

  app.post('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    menssage: 'Usuário Criados com sucesso!',
    profile: dados
  })
  })

  app.put('/user', (req, res) => {
   const dados = req.body 
    console.log(dados)
   res.json({
    menssage: 'usuario editado com sucesso!',
    profile: dados
  })
  })
  
  app.get('/profile', (req, res) => {
  console.log('foi feito um GET no  /GET')
  res.json({
    profile: 'Dados listados com sucesso!'})
  })
 
  app.post('/profile', (req, res) => {
  console.log('foi feito um POST no  /POST')
  res.json({
    profile: 'Dados Criados com sucesso!'})
  })

  app.put('/profile', (req, res) => {
  console.log('foi feito um PUT no  /PUT')
  res.json({
    profile: 'Dados Atualizados com sucesso!'})
  })

  app.delete('/profile', (req, res) => {
  console.log('foi feito um DELETE no  /DELETE')
  res.json({
    profile: 'Dados DELETADO com sucesso!'})
  })



app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)
})