import React from 'react';
import './input.css';

interface IInputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const defaultProps = {
  required: false,
  value: ''
};

export default function InputField(props: IInputFieldProps & typeof defaultProps) {
  const { type, label, name, placeholder, required, value } = props;

  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
