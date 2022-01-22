import { useCallback, useState } from "react";

export const useDialog = (): {
  isOpen: boolean;
  open: () => void;
  close: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
  };
};
