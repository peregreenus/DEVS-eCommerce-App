import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = function MyButton({ children, className, ...props }) {
  return (
    // eslint-disable-next-line
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
