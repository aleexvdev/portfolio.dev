import type { ToastProps, ToastType } from '@/components/react/Toast';
import { useState } from 'react';

export const useToast = () => {
  const [toastState, setToastState] = useState<ToastProps>({
    isVisible: false,
    type: "loading",
    message: "",
  });

  const showToast = (
    type: ToastType,
    message: string
  ) => {
    setToastState({ isVisible: true, type, message });
    if (type !== "loading") {
      setTimeout(() => {
        setToastState((prev) => ({ ...prev, isVisible: false }));
      }, 3000);
    }
  };

  return {
    toastState,
    showToast,
  }

}
