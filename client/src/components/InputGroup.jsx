
const InputGroup = (
    { 
    label, 
    type, 
    value, 
    onChange, 
    error }
) => {

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}
        <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputGroup