import React from 'react';
import * as styles from './signup-form.module.css';
import { InputProps } from '../../../data/types/signup-props';

export default function InputField({
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
}: InputProps) {
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
