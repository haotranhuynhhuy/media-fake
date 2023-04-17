import React from "react";

interface TextErrorProps {
  error: string;
}
const TextError: React.FC<TextErrorProps> = ({ error }) => {
  return (
    <div className="shake mb-2 mx-5 text-red-500 min-h-[1rem] text-sm">
      <span>{error}</span>
    </div>
  );
};

export default TextError;
