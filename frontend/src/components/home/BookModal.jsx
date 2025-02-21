import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import PropTypes from "prop-types";

export const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] maw-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative "
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer "
          onClick={onClose}
        />
        <h2 className="w-fit 2 px-4 py-1 bg-red-400 rounded-lg">
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
      </div>
    </div>
  );
};

BookModal.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookModal;
