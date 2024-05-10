import React from 'react';
import './button.css';

interface IButtonFieldProps {
  label: string;
  name: string;
  type: string;
}

const defaultProps = {
  disabled: false,
  className: 'button'
};

export default function ButtonElement(props: IButtonFieldProps & typeof defaultProps) {
  const { type, label, name, disabled, className } = props;

  return (
    <button
      type={type ? 'submit' : 'button'}
      data-name={name}
      disabled={disabled}
      className={className}>
      {label}
    </button>
  );
}
