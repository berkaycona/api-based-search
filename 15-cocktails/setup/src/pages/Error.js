import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Sorry, It is a dead-end.</h1>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
