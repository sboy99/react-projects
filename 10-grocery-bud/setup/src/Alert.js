import React, { useEffect } from "react";

const Alert = ({ msg, className }) => {
  return <div className={`alert ${className}`}>{msg}</div>;
};

export default Alert;
