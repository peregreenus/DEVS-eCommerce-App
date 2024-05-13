import React, { ChangeEvent } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  classes: string;
  wrong: boolean;
  error: string;
  disabled: boolean;
}

export default function InputField(props: InputProps) {
  const {
    type,
    label,
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    classes,
    wrong,
    error,
    disabled
  } = props;
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={classes}
        disabled={disabled}
      />
      {wrong && error && <span className="error-span">{error}</span>}
    </label>
  );
}
