export const logger = (req, res, next) =>{
    // mostrar data 
    console.log(`${req.method} - ${req.originalUrl} - ${new Date().toLocaleString('pt-BR', {timeZone: 'America/sao_Paulo'})}`)

    next()
}