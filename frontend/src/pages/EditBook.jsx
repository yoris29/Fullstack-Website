import React, { useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

export const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const fetchBook = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_PATH}/${id}`);
      const data = await res.json();
      setTitle(data.book.title);
      setAuthor(data.book.author);
      setPublishYear(data.book.publishYear);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBook();
  }, []);

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);

    axios
      .put(`${import.meta.env.VITE_APP_PATH}/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An Error Happened", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-start">
        <BackButton destination="/" />
        <h1 className="text-3xl my-4">Edit Book</h1>
      </div>

      {loading ? <Spinner /> : ""}
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              placeholder={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              placeholder={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              placeholder={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={editBook}>
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
};
