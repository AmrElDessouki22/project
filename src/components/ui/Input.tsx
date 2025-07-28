"use client";

export default function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 rounded ${className}`}
      style={{ color: '#333333', backgroundColor: '#f5f5f5' }} // Dark grey text on light grey background to avoid conflict with white background
    />
  );
}
