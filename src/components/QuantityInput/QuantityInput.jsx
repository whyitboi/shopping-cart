export const QuantityInput = ({ value, onChange }) => {
  const handleInputString = (e) => {
    const number = e.target.value;
    if (isNaN(Number(number)) || Number(number) < 1) {
      onChange(1);
    } else {
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
        value={value}
        onChange={handleInputString}
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
