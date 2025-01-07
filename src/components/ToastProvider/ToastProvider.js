import React from 'react';

import { useKeyDown } from '../../hooks/util';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [ toasts, setToasts ] = React.useState([]);
  
  function createToast(message, variant) {
    const id = crypto.randomUUID();
    setToasts([...toasts, {'id': id, 'message': message, 'variant': variant}])
  }

  function dismissToast(id) {
    const nextArray = toasts.filter(item => item.id !== id);

    setToasts(nextArray);
  }

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, [])

  useKeyDown('Escape', dismissAllToasts);

  return (
    <ToastsContext.Provider 
    value={{
      toasts,
      createToast,
      dismissToast
      }}
    >
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
