import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: React.FC<MyButtonProps> = function MyButton({ children, className, ...props }) {
  return (
    // eslint-disable-next-line
    <button className={`myBtn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
