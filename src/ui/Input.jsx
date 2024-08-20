function Input({
  name,
  value,
  onChange,
  placeHolder,
  type = "text",
  children,
}) {
  return (
    <div className="w-full">
      <div className="textField__input w-full flex items-center justify-between border border-primary-600">
        <input
          className="w-full text-secondary-900 bg-secondary-100"
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          autoComplete="off"
        />
        {children}
      </div>
    </div>
  );
}

export default Input;
