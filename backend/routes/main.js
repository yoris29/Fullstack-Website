const express = require('express')
const router = express.Router()
const {
   saveBook,
   getBooks,
   getBook,
   updateBook,
   deleteBook
} = require('../controllers/main')

router.route('/').post(saveBook).get(getBooks)
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)


module.exports = router