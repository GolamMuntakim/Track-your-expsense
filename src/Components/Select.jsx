

const Select = ({label, id, name, value, onChange, error, options, defaultOptions}) => {
  return (
    <div>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" hidden>
            {
              defaultOptions && (
                <option value="" hidden>{defaultOptions}</option>
              )
            }
          </option>
          {
            options.map((option,i) =>(<option key={i} value={option}>{option}</option>))
          }
        </select>
        <p className="error">{error}</p>
      </div>
    </div>
  );
};

export default Select;