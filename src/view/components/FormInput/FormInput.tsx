import React, { useState } from 'react';
import { InputProps } from '../../../data/types/interfaces';
import * as classes from './FormInput.module.css';

function FormInput(
  { id, name, labelName, onChange, placeholder, errorMessage }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const [isEncryptedPassword, setIsEncryptedPassword] = useState<boolean>(true);

  return (
    <label htmlFor={`${id}`}>
      {labelName}
      <input
        id={`${id}`}
        ref={ref}
        className={classes.loginFormInput}
        onChange={onChange}
        name={name}
        type={name === 'password' && isEncryptedPassword ? 'password' : 'text'}
        placeholder={placeholder}
      />
      {name === 'password' && (
        <input type="checkbox" onChange={() => setIsEncryptedPassword(!isEncryptedPassword)} />
      )}
      <span className={classes.errorMsg}>{errorMessage}</span>
    </label>
  );
}

export default React.forwardRef(FormInput);
