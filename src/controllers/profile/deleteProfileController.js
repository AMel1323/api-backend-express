export const deleteProfileController = (req, res) => {
    const id = req.params.id
    res.json({
        profile: 'Usuario com Id deletado com sucesso!'
    })
}
