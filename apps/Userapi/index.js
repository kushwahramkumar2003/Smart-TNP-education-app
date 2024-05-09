const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')

require('dotenv').config()
const app = express()

//regular middleware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}))

//cookie middleware
app.use(cookieParser())

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

app.use('/api', userRouter)
app.use('/api', postRouter)


app.get('/', (req, res) => {
    res.send("")
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})