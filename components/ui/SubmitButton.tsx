import React, { FormEvent } from "react";

interface SubmitButtonProps {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
}

const SubmitButton = ({
  onClick,
  label = "Submit",
  disabled = false,
}: SubmitButtonProps) => (
  <button
    className={`${
      disabled ? "bg-slate-500" : "bg-indigo-500"
    } text-white text-center p-3 w-32 rounded-lg hover:bg-indigo-700`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default SubmitButton;
