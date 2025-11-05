
 export  const teste = (req, res, next) => {
    console.log('passei pelo middleware de teste')
    req.nomeTeste = "Melissa"
    console.log(req.count || 0 ) +1
    console.log("Teste Count", req.count)
    if(req.count === 3){
        res.json({message: "Parou na terceira vez no middleware de teste"})
    }
    console.log(req.method)
    next()
}

