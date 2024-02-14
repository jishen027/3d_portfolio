import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "text-red-500" : "text-green-500"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-green-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
