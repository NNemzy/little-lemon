import React from "react";

const MyFormField = ({
  label,
  type,
  options,
  as = "input",
  onChange,
  ...props
}) => {
  const [field, meta] = useField(props);
  const { initialValue, initialError, initialTouched, ...restMeta } = meta;
  const Component = as;

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Component
        type={type}
        {...field}
        {...restMeta}
        onChange={onChange ? (e) => onChange(e, field.onChange) : null}
      >
        {as === "select" && props.children ? props.children : null}
      </Component>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyFormField;
