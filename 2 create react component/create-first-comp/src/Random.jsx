import React from "react";

const Random = () => {
  let number = Math.random() * 10;
  return (
    <div>
      <h2 style={{ backgroundColor: "#457892" }}>Random Number is {number}</h2>
    </div>
  );
};

export default Random;
