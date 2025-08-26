export const getByIdProfileController = (req, res) => {
    const id = req.params.id
    res.json({
        profile: 'Dados listados com sucesso!'
    })
}
