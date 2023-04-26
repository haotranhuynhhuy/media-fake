import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotify = () => {
  return (
    <ToastContainer
      autoClose={400}
      theme="colored"
      position="top-right"
      closeOnClick={false}
      pauseOnFocusLoss={false}
    />
  );
};

export default ToastNotify;
