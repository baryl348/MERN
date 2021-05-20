const jwt = require('jsonwebtoken')
require('dotenv').config()
// TODO не работает проверка токена
module.exports = function (req, res, next) {
    console.log(req.method,'method')
    if (req.method === "GET") {
        next()
    }
    try {
        console.log(req.headers.authorization.split(' ')[1],'headers')
        const tokenUser = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        console.log(tokenUser,'tokenUser')
        if (!tokenUser) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(tokenUser, process.env.SECRET_KEY)
        console.log(decode,'decode')
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};