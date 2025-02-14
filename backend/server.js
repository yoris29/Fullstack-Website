const express = require("express")
const app = express()
const books = require('./routes/main')
const connectDB = require("./db/connect")
const cors = require("cors")


// Middleware
app.use(express.json())
app.use(cors())
app.use('/api/v1/books', books)


// Server
const port = process.env.PORT || 5000
const start = async () => {
   try {
      await connectDB(process.env.DB_STR)
      app.listen(port, () => console.log(`Server is listening on port ${port}`))
   } catch (error) {
      console.log(error)
   }
}
start()