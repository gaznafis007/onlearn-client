import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="mx-auto">
      <h2 className="text-danger mt-4 text-center">{error.status}</h2>
      <h2 className="text-danger mt-4 text-center">{error.statusText}</h2>
      <h3 className="text-center mt-3">
        <Link to="/">Back to home</Link>
      </h3>
    </div>
  );
};

export default ErrorPage;
