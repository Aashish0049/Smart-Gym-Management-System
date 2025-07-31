import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
};
