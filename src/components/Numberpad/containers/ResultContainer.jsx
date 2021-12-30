import React from "react";

const ResultContainer = (props) => {
  const phoneNumber = props.location?.state?.phoneNumber;
  return <h1>{phoneNumber || "error"}</h1>;
};
export default ResultContainer;
