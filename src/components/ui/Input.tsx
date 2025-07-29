'use client';
import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input 
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded p-2 w-full"
    />
  );
};

export default Input;