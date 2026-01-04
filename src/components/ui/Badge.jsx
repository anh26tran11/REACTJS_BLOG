import React from "react";

const Badge = ({ children }) => {
  return (
    <span className="inline-flex items-center justify-center border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-indigo-50 text-indigo-600 rounded-full">
      {children}
    </span>
  );
};

export default Badge;
