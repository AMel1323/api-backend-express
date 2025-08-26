export const createProfileController = (req, res) => {
    const dados = req.body
    res.json({
        menssage: 'Usuário Criados com sucesso!',
        profile: dados
    })
}
