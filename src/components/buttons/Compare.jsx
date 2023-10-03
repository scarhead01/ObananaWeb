

const CompareCheckbox = ({ productId }) => {
  const handleCheckboxClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating
  };

  return (
    <div className="compare-checkbox">
      <input
        type="checkbox"
        id={`compare-${productId}`}
        onClick={handleCheckboxClick} // Handle the click event
      />
      <label htmlFor={`compare-${productId}`}>Compare</label>
    </div>
  );
}

export default CompareCheckbox;
