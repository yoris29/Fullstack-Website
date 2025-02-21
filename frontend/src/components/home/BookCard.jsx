import React, { useState } from "react";
import PropTypes from "prop-types";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { Eye } from "lucide-react";
import BookModal from "./BookModal";

export const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl transition-[0.3s] "
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-sm text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-400 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-400 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-around items-center gap-x-2 mt-4 p-4">
        <Eye
          className="text-3xl text-blue-800 hover:text-black transition-[0.3s]"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-3xl text-green-800 hover:text-black transition-[0.3s]" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-3xl text-yellow-500 hover:text-black transition-[0.3s]" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-3xl text-red-700 hover:text-black transition-[0.3s]" />
        </Link>
      </div>
      {showModal ? (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default BookCard;
