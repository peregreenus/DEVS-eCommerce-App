/* eslint-disable no-console */
import { useState } from 'react';

export default function useModal() {
  const [isVisible, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleVisible = (key: string) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: !isVisible[key]
    }));
  };

  return {
    isVisible,
    toggleVisible
  };
}
