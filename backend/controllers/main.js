const Book = require('../models/Book')

const saveBook = async (req, res) => {
   const { title, author, publishYear } = req.body
   if (!title || !author || !publishYear) {
      return res.status(400).json("Please send all the required data")
   }

   const newBook = {
      title,
      author,
      publishYear
   }
   const book = await Book.create(newBook)

   return res.status(200).json({ msg: "Book added successfully!", book })
}

const getBooks = async (req, res) => {
   const books = await Book.find({})
   return res.status(200).json({ nbHits: books.length, books })
}

const getBook = async (req, res) => {
   const { id } = req.params
   const book = await Book.findById(id)
   if (!id || !book) {
      return res.status(400).json({ msg: "Please enter a valid book id" })
   }

   return res.status(200).json({ msg: `Book '${book.title}' by '${book.author}' is found!`, book })
}

const updateBook = async (req, res) => {
   const { id } = req.params
   const { title, author, publishYear } = req.body
   if (!title && !author && !publishYear) {
      return res.status(400).json("Please send at least a new data")
   }

   const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      { title, author, publishYear },
      { new: true, runValidators: true, overwrite: true }
   )
   return res.status(200).json({ msg: `Book Updated!`, updatedBook })
}

const deleteBook = async (req, res) => {
   const { id } = req.params
   const book = await Book.findOneAndDelete({ _id: id })

   if (!id || !book) {
      return res.status(400).json({ msg: "Please enter a valid book id" })
   }

   return res.status(200).json({ msg: `Book deleted` })

}

module.exports = { getBooks, saveBook, getBook, updateBook, deleteBook }