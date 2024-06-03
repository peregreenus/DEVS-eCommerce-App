import React from 'react';
import EditPencilIcon from '../../common/icons/editPencilIcon';
import * as styles from './profile-content.module.css';

interface ProfileContentProps {
  data: string;
  name: string;
  onClick: () => void;
}

export default function ProfileContentElement({ name, data, onClick }: ProfileContentProps) {
  const textb = '';
  return (
    <div className={styles.profileContentString}>
      <p>{data}</p>
      <button
        data-name={name}
        id={name}
        type="button"
        className={styles.controlProfileButton}
        onClick={onClick}>
        <EditPencilIcon width="1.5rem" height="1.5rem" />
        {textb}
      </button>
    </div>
  );
}
