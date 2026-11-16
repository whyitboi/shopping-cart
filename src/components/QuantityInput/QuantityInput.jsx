export const QuantityInput = ({ value, onChange }) => {
  const handleInputString = (e) => {
    if (isNaN(Number(e.target.value)) || Number(e.target.value) < 1) return 1;
    return Number(e.target.value);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Decrease Quantity"
        onClick={onChange(value - 1)}
        disabled={value <= 1 ? true : false}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        onChange={handleInputString}
        aria-label="Quantity"
      />
      <button
        type="button"
        aria-label="Increase Quantity"
        onClick={onChange(value + 1)}
      >
        -
      </button>
    </>
  );
};
