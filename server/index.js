const express = require('express')
const cors = require('cors')
const sequelize = require('./db/db')
const models = require('./models/models')
const router = require('./routes/auth-rutes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 6000 
app.use(cors())
app.use(express.json())
app.use('/api',router)

const start = async()  => {
    try {
    await sequelize.authenticate()
    await sequelize.sync()
        app.listen(PORT,()=> console.log(`Server started on port ${PORT}...`) )
    } catch (error) {
        console.log(error)
    }
}
start()

