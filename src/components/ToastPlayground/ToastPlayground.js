import React from 'react';

import ToastShelf from '../ToastShelf';
import { ToastsContext } from '../ToastProvider';
import Button from '../Button';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [ message, setMessage ] = React.useState('');
  const [ variant, setVariant ] = React.useState(VARIANT_OPTIONS[0]);
  const { createToast } = React.useContext(ToastsContext);

  function handleSubmit(event) {
    event.preventDefault();
    createToast(message, variant);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form 
        className={styles.controlsWrapper}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((value) => {
              const id = `variant-${value}`;
              return (
                <label key={id} htmlFor={id}>
                <input
                  id={id}
                  type="radio"
                  name="variant"
                  value={value}
                  checked={variant === value}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                  {value}
                </label>
            )})}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
