import { create } from '../../models/profileModel.js'

export const createProfileController = async (req, res) => {
    const profile = req.body

    const result = await create(profile)

    res.json({
        menssage: 'Usuário Criados com sucesso!',
        profile: result
    })
}
