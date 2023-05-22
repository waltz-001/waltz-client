const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  errors,
  touched,
  classname,
}) => {
  return (
    <span className="input-group d-flex justify-content-center position-relative">
      <span className="input-group-text h-2 px-4">
        <i className={classname} style={{ color: "#DFB6FF" }}></i>
      </span>
      <span className=" w-75">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="form-control"
          required
        />
      </span>
      {errors && touched ? (
        <span className="form-error text-danger position-absolute top-50 ml-4 start-50 translate-middle-y">
          {errors}
        </span>
      ) : null}
    </span>
  );
};
export default Input;
