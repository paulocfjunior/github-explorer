import React from "react";

function AnimatedNumber({ value, className }) {
  return (
    <span className={className}>
      {value} {value === 1 ? "result" : "results"}
    </span>
  );
}

export default AnimatedNumber;
