import express from 'express'

const router = express.Router()

router.post('/profile', (req, res) => { const dados = req.body
 
  res.json({
    menssage: 'Usuário Criados com sucesso!',
    profile: dados
  })
  })

  // lista todos os profiles
  router.get('/', (req, res) => {
  res.json({
    profile: 'Dados listados com sucesso!'})
  })
  // consuta um profile específico
  router.get('/:id', (req, res) => {
    const id = req.params.id
  res.json({
    profile: 'Dados listados com sucesso!'})
  })

   router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    profile: 'Dados Atualizados com sucesso!'})
  })
   router.post('/', (req, res) => {
  console.log('foi feito um POST no  /POST')
  res.json({
    profile: 'Dados Criados com sucesso!'})
  })

   router.delete('/:id', (req, res) => {
  const id = req.params.id
  const name = req.params.name
  res.json({
    profile: 'Usuario com Id deletado com sucesso!'})
  })

   router.put('/user', (req, res) => {
   const dados = req.body 
    console.log(dados)
   res.json({
    message: 'usuario editado com sucesso!',
    profile: dados
  })
  })

  export default router