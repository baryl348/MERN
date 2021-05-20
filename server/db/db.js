const {Sequelize} = require('sequelize')
require('dotenv').config()

module.exports = new Sequelize (
process.env.NAME_DB, // naming DB
process.env.USER_DB,  //user 
process.env.PASSWORD_DB, //password
{
    dialect:'postgres',
    host:process.env.localhost,
    port:process.env.PORT_DB
}
)