/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react';
import * as styles from './profile-addresses.module.css';

interface EditAddressModalProps {
  children: ReactNode;
  toggleVisible: () => void;
}

function EditAddressModal({ children, toggleVisible }: EditAddressModalProps) {
  return (
    <div
      className={styles.showModalEditAddress}
      onClick={() => toggleVisible}
      onKeyDown={() => toggleVisible}>
      {children}
    </div>
  );
}

export default EditAddressModal;
