import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'

const app = express()
const port = 3333

app.use(express.json()) // converter o JSON que chegou na requesição em um objeto JavaScript e vai salvar em req.body

 app.use('/profile', profileRouter)
 app.use('/product', productRouter)
 app.use('supplier', profileRouter) 
app.use('/car', carRouter)

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)
})