import React, { ChangeEvent } from 'react';
import * as styles from './signup-form.module.css';

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
  error: string | null;
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
    <label htmlFor={name} className={styles.label}>
      {label}
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`${classes} ${wrong && error ? styles.errorBorder : ''}`}
        disabled={disabled}
      />
      {wrong && error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
