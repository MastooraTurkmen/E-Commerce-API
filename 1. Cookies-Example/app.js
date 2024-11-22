require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const morgon = require('morgan')
const cookieParser = require('cookie-parser')

// database
const connectDB = require('./db/connect')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(morgon('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('e commerce api')
})

app.get('/api/v1', (req, res) => {
    res.send('e commerce api')
})

app.get('/api/v1/auth', (req, res) => {
    res.send('e commerce api')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on Port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()