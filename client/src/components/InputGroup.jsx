
const InputGroup = (
    { 
    label, 
    type, 
    value, 
    onChange, 
    error,
    onBlur,
    placeholder
  }
) => {

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}
        <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur}
        placeholder={placeholder}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputGroup