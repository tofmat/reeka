import React from "react";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    width="13"
    height="11"
    viewBox="0 0 13 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className || ""}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.67095 10.275L12.476 5.47001L7.67095 0.665009L6.72895 1.60801L9.92395 4.80301H0.199951V6.13701H9.92395L6.72895 9.33201L7.67095 10.275Z"
      fill="white"
    />
  </svg>
);

export default ArrowIcon;
