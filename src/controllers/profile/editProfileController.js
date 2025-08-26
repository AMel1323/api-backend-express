export const editProfileController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        profile: 'Dados Atualizados com sucesso!'
    })
}
