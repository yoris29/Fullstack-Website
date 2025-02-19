import React from "react";
import PropTypes from "prop-types";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link
        to={destination}
        className="bg-sky-800 flex justify-center text-white px-2 py-1 rounded-lg w-fit"
      >
        <ArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string.isRequired,
};
