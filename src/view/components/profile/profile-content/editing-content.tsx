import React from 'react';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';
import { ProfileContentInputProps } from '../../../../data/types/profile-props';
import * as styles from './profile-content.module.css';
import CloseXIcon from '../../common/icons/closeXIcon';

export default function EditingProfileContent({
  onSubmit,
  type,
  name,
  value,
  error,
  onChange,
  onClick
}: ProfileContentInputProps) {
  const textb = '';
  return (
    <div className={styles.editInfoContainer}>
      <form onSubmit={onSubmit} className={styles.infoForm}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.inputAddressField}
        />
        <button type="submit" className={styles.controlProfileButton} disabled={!!error}>
          <SaveMarkIcon width="1.5rem" height="1.5rem" fill={error ? 'grey' : 'green'} />
          {textb}
        </button>
        <button type="button" className={styles.controlProfileButton} onClick={onClick}>
          <CloseXIcon width="1.5rem" height="1.5rem" />
          {textb}
        </button>
      </form>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
