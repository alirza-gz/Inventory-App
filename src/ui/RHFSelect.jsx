function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={name}
        className="textField__input form-select pr-10"
      >
        {options.map((option) => (
          <option key={option.title} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
