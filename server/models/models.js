const {DataTypes} = require('sequelize')
const sequelize = require('../db/db')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName:{type:DataTypes.STRING, require:true},
    secondName:{type:DataTypes.STRING, require:true},
    email:{type:DataTypes.STRING, require:true, unique:true},
    password:{type:DataTypes.STRING, require:true}
})
module.exports = {User}