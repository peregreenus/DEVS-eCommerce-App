import React, { useState } from 'react';
import * as classes from './input.module.css';

interface InputProps {
  label: string;
  onClick: (value: string) => void;
}

function InputLabelButton({ label, onClick }: InputProps) {
  const [value, setValue] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  function handleClick(val: string): void {
    onClick(val);
    setValue('');
  }

  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="promo">
        {label}
      </label>
      <input
        className={classes.input}
        type="text"
        id="promo"
        value={value}
        onChange={handleInput}
      />
      <button className={classes.btn} type="button" onClick={() => handleClick(value)}>
        Apply
      </button>
    </div>
  );
}

export default InputLabelButton;
