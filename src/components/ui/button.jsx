export const Button = ({ children, onClick, className = "" }) => {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-4 rounded-lg font-medium transition-all duration-200 ${className}`}
      >
        {children}
      </button>
    );
  };
  