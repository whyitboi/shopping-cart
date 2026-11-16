import { useState } from "react";

export const QuantityInput = ({ value, onChange }) => {
  const [draft, setDraft] = useState(null);
  const handleInputString = (e) => {
    const number = e.target.value;
    setDraft(number);
    if (Number(number) && Number(number) < 1) {
      onChange(number);
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Decrease Quantity"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        value={draft ?? value}
        onChange={handleInputString}
        onBlur={() => setDraft(null)}
        aria-label="Quantity"
      />
      <button
        type="button"
        aria-label="Increase Quantity"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </>
  );
};
