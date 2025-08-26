export const getByIdSupplierController = (req, res) => {
    const id = req.params.id
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Dados do ${id} consultado com sucesso` })
}
