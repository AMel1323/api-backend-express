import { remove } from '../../models/profileModel.js'

export const deleteProfileController = async (req, res) => {

    // id vem da url como String, precisa converter para Number
    const id = req.params.id

    const result = await remove(+id) // +id converte para Number ou usar Number(id) ou parseInt(id)

    res.json({
        message: 'Usuario com Id ${id} deletado com sucesso!',
        profile: result
    })
}
