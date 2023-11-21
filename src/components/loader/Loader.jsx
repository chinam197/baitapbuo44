import React from "react";
import "./style.css";
const Loader = () => {
  return (
    <div className="Spinner">
      <div className="spinner-border text-secondary" role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
