import {list} from "../../models/productModel.js"

export const listProductController = async (req, res) => {
    const id = req.params.id

    const result = await list(+id)


  res.json({ message: 'Produtos listado com sucesso' ,
  product: result
  })
}