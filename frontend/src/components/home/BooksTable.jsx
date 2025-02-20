import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

export const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-around items-center">
                <Link to={`/books/details/${book._id}`}>
                  <p className="text-xl text-green-800 transition-[0.3s] hover:bg-green-300 rounded-md px-4">
                    Info
                  </p>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <p className="text-xl text-yellow-600 transition-[0.3s] hover:bg-yellow-300 rounded-md px-4">
                    Edit
                  </p>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <p className="text-xl text-red-800 transition-[0.3s] hover:bg-red-300 rounded-md px-4">
                    Delete
                  </p>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default BooksTable;
