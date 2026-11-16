export const QuantityInput = ({ value, onChange }) => {
  const handleInputString = (e, number) => {
    if (isNaN(Number(e.target.value)) || Number(e.target.value) < 1)
      onChange(1);
    onChange(Number(e.target.value));
    //onChange(number);
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
