'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
    />
  );
});

Input.displayName = 'Input';

export default Input;
