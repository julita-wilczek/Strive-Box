export const badRequestHandler = (error, req, res, next) => {
 if (error.status === 400 ) {
     res.status(400).send({message: error.message, errorsList: errorsList.array().map(error => error.msg) })
 } else {
    next(error)
 }
}



export const notAuthorizedHandler = (error, req, res, next) => {
    if (error.status === 401 ) {
        res.status(401).send({message: error.message})
    } else {
       next(error)
    }
}
export const notFoundHandler = (error, req, res, next) => {
    if (error.status === 404 ) {
        res.status(404).send({message: error.message})
    } else {
       next(error)
    }
}
export const genericServerErrorHandler = (error, req, res, next) => {
        res.status(500).send({message: "Server Error. It's not you, it's me"})
}
