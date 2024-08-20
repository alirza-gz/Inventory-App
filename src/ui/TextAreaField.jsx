function TextAreaField({
  label,
  name,
  register,
  required,
  errors,
  validationSchema,
}) {
  return (
    <div>
      <label className="text-secondary-500 mb-2 block" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <textarea
        className="mt-1 textField__input"
        {...register(name, validationSchema)}
        id={name}
      ></textarea>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextAreaField;
