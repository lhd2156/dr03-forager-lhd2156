import React from 'react';

const WarningIcon = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      className={className}
    >
      {/* Triangle */}
      <path d="M12 2L2 22h20L12 2z" fill="red" stroke="black" strokeWidth="0.5" />
      {/* Exclamation Mark - Centered & Adjusted */}
      <text
        x="12"  /* Center the exclamation mark horizontally */
        y="17.5" /* Move a little more down */
        fontSize="14"  /* Make it a bit larger */
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
      >!</text>
    </svg>
  );
};

export default WarningIcon;
