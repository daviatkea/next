function Button({ children, onClick, theme, ...rest }) {
  return (
    <button
      {...rest}
      data-theme={theme}
      className="bg-btn px-4 py-1 rounded cursor-pointer hover:bg-gray-800 active:bg-gray-950"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
