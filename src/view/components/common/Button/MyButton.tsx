import React, { ButtonHTMLAttributes } from 'react';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: React.FC<MyButtonProps> = function MyButton({ children, className, ...props }) {
  return (
    // eslint-disable-next-line
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
