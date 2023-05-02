import Select from "react-select";
const MySelect = ({
  options,
  value,
  onChange,
  placeholder,
  classname,
  maxMenuHeight,
  errors,
  touched,
}) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <span className="input-group d-flex justify-content-center position-relative">
      <span className="input-group-text px-4">
        <i className={classname} style={{ color: "#DFB6FF" }}></i>
      </span>
      <div className="w-75">
        <Select
          options={options}
          value={defaultValue(options, value)}
          placeholder={placeholder}
          onChange={(value) => onChange(value)}
          isSearchable
          maxMenuHeight={maxMenuHeight}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            control: () => ({
              display: "flex",
              textAlign: "left",
              border: "2px solid gray",
              borderRadius: "0px 5px 5px 0px",
              background: "none",
            }),

            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: "gray",
            }),

            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "white",
            }),

            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "#5B13D1",
              color: "white",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#A023BF",
              primary: "#5B13D1",
            },
          })}
        ></Select>
      </div>
      {errors && touched ? (
        <span className="form-error text-danger position-absolute top-50 ml-4 start-50 translate-middle-y">
          {errors}
        </span>
      ) : null}
    </span>
  );
};

export default MySelect;
