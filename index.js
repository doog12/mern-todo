const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/todo', require('./routes/todo.route'))


//* ENV
const PORT = process.env.PORT || 5000
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const DB_HOST = `mongodb+srv://${DB_USERNAME}:${DB_PASS}@cluster0.u08ng.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`


async function start() {
   try {
      await mongoose.connect(DB_HOST, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })

      app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
   } catch (e) {
      console.log(e)
   }
}

start()