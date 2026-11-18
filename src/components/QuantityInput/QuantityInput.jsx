import { useState } from "react";
import styles from "./QuantityInput.module.css";

export const QuantityInput = ({ value, onChange }) => {
  const [draft, setDraft] = useState(null);
  const handleInputString = (e) => {
    setDraft(e.target.value);
    const number = Number(e.target.value);

    if (Number.isInteger(number) && number >= 1) {
      onChange(number);
    }
  };

  return (
    <div className={styles.quantity}>
      <button
        className={styles.controls}
        type="button"
        aria-label="Decrease Quantity"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
      >
        -
      </button>
      <input
        className={styles.input}
        type="number"
        min="1"
        value={draft ?? value}
        onChange={handleInputString}
        onBlur={() => setDraft(null)}
        aria-label="Quantity"
      />
      <button
        className={styles.controls}
        type="button"
        aria-label="Increase Quantity"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};
