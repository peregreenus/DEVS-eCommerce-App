/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react';
import * as cl from './modal.module.css';

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

function Modal({ children, visible, setVisible }: ModalProps) {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
      onKeyDown={() => setVisible(false)}>
      <div
        className={cl.myModalContent}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
