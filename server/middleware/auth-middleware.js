const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (req, res, next) {
    console.log(req.headers,"HEADER")
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        console.log(token,'TOKEN')
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY) 
        console.log(decoded,'DECODED')
        req.user = decoded
        console.log(req.user,'user')
        next()
    } catch (e) {
        console.log(e, 'error')
        res.status(401).json({message: "Не авторизован"})
    }
};