import React from 'react';
import SaveMarkIcon from '../../common/icons/saveMarcIcon';
import { ProfileContentInputProps } from '../../../../data/types/profile-props';
import * as styles from './profile-content.module.css';

export default function EditingProfileContent({
  onSubmit,
  type,
  name,
  value,
  onChange
}: ProfileContentInputProps) {
  const textb = '';
  return (
    <form onSubmit={onSubmit}>
      <input type={type} name={name} value={value} onChange={onChange} />
      <button type="submit" className={styles.controlProfileButton}>
        <SaveMarkIcon width="1.5rem" height="1.5rem" />
        {textb}
      </button>
    </form>
  );
}
