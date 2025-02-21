import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const deleteBook = () => {
    setLoading(true);
    axios
      .delete(`${import.meta.env.VITE_APP_PATH}/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error happened", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 border-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete the book</h3>
        <button
          className="p-4 cursor-pointer bg-red-600 text-white m-8 w-full"
          onClick={deleteBook}
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};
