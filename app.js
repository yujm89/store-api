require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

//middleware
app.use(express.json())

//routes
app.get('/', (req,res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})



const port = process.env.PORT || 8080

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()