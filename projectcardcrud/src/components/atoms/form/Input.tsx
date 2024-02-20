import React from "react";
import { ErrorsMessages } from "./ErrorsMessages";

interface InputProps {
  className?: string;
  placeholder?: string;
  type: string;
  name: string;
  value?: string;
  label?: string;
  error: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
  label,
  error,
  accept,
}) => {

  return (
    <>
      {label === name && (
        <label className="text-black" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${className}`}
        onChange={onChange}
        accept={`${accept}`}
      />

      {error && <ErrorsMessages>{error}</ErrorsMessages>}
    </>
  );
};

export { Input };
