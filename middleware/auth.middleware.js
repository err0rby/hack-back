const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

    const { authorization } = req.headers
    const [type, token] = authorization.split(' ');

   
    if (!authorization) {
        return res.status(401).json('Ошибка авторизации')
    }
 
    if (type !== 'Bearer') {
        return res.status(401).json('Неверный тип токена')
    }

    try {
      
        req.user = await jwt.verify(token, process.env.SECRET_JWT)

        next() 

    } catch (e) {
        return res.status(401).json(e.toString())
    }
}