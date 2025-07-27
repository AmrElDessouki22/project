'use client';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input = ({ type, value, onChange, placeholder = '', className = '' }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 ${className}`}
    />
  );
};

export default Input;
