import React from 'react';

import Toast from '../Toast';
import { ToastsContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);

  return (
    <ol 
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts?.map(({id, message, variant}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
