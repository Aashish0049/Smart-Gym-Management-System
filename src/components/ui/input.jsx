export const Input = ({ type = "text", placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg"
      />
    );
  };
  