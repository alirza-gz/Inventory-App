function TextField({
  label,
  name,
  register,
  required,
  errors,
  validationSchema,
  type = "text",
}) {
  return (
    <div>
      <label className="text-secondary-500 mb-2 block" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="mt-1 textField__input w-full"
        {...register(name, validationSchema)}
        type={type}
        id={name}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
