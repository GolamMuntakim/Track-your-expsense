

const Input = ({label, id, name, value, onChange, error}) => {
    return (
        <div>
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Input;