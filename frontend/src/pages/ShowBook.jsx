import React, { useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import { useParams } from "react-router-dom";

export const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchBook = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/books/${id}`);
      const data = await res.json();
      setBook(data.book);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBook();
  }, []);

  return (
    <div className="m-4">
      <BackButton destination="/" />
      <h1 className="text-3xl my-4 ">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xlw-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id:</span>
            <span className="text-xl mr-4 text-gray-500">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title:</span>
            <span className="text-xl mr-4 text-gray-500">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author:</span>
            <span className="text-xl mr-4 text-gray-500">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year:</span>
            <span className="text-xl mr-4 text-gray-500">
              {book.publishYear}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Creation Date:</span>
            <span className="text-xl mr-4 text-gray-500">
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">
              Last Update Date:
            </span>
            <span className="text-xl mr-4 text-gray-500">
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
