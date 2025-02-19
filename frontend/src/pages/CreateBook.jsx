import React, { useState } from "react";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);

    axios
      .post("http://localhost:5000/api/v1/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-start">
        <BackButton />
        <h1 className="text-3xl my-4">Create Book</h1>
      </div>

      {loading ? <Spinner /> : ""}
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={saveBook}>
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
};
