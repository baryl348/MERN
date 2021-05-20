const jwt = require('jsonwebtoken')
const hash = require('bcrypt')
const ApiError = require('../error/apiError')
const {User} = require('../models/models')
require('dotenv').config()

const generateJwt = (id,firstName,secondName,email) => {
    return jwt.sign(
        {id,firstName,secondName,email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req,res,next){

try {
    const {firstName,secondName,email,password}=req.body
        if (!firstName){
            return next (ApiError.badRequest('Имя было введенно не корректно!'))
        }
        if(!secondName){
            return next (ApiError.badRequest('Фамилия была введенна не корректно!'))
        }
        if(!secondName & !firstName){
            return next (ApiError.badRequest('Имя и фамилия были введены не корректно!'))
        }
        if(!email){
            return next (ApiError.badRequest('Email был введен не верно!'))
        }
        if(!password){
            return next (ApiError.badRequest('Пароль был введен не корректно!'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next (ApiError.badRequest('Пользователь с таким email уже сущевствует!'))
        }
        const hashPassword = await hash.hash(password,5)
        const user = await User.create({firstName, secondName, email, password:hashPassword})
        const hashUserToken = generateJwt(user.id, user.firstName, user.secondName, user.email)
        return res.json({user:hashUserToken})
} catch (error) {
    console.log(error)
    return res.json( next(ApiError.internal('Произошла не предвиденная ошибка :(')))
}     
    }
    async login(req,res,next){
        try {
            const {email,password}=req.body
            const user = await User.findOne({where:{email}})
            if(!email & !password){
                return next (ApiError.badRequest('Email или пароль был введен не верно!'))
            }
            if(!email){
                return next (ApiError.badRequest('Email был введен не верно!'))
            } 
            if(!user){
                return next (ApiError.badRequest('Пользователь с таким Email не был найден, попробуйте еще раз или если вы не были зарегестрированны то пожалуйста зарегестрируйтесь! '))
            }
            const comparePassword = hash.compareSync(password, user.password)
            if(!comparePassword){
                return next (ApiError.badRequest('Пароль был введен не правильно!'))
            }
            const tokenUer = generateJwt(user.id,user.firstName,user.secondName,user.email)
            return res.json({user:tokenUer})
        } catch (error) {
            console.log(error)
            return res.json( next(ApiError.internal('Произошла не предвиденная ошибка :(')))
        }
        
    }
    async check(res,req,next){
        console.log(req,'req')
        const{id,firstName,secondName,email} = req.user
        const tokenUser = generateJwt(id,firstName,secondName,email)
        return res.json({user:tokenUser})
    }
}
module.exports = new UserController