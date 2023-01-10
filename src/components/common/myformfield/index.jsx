import React from "react";
import { useField } from "formik";

import styles from "./index.module.css";

const MyFormField = ({
  label,
  type,
  options,
  as = "input",
  onChange,
  disabled = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const { initialValue, initialError, initialTouched, ...restMeta } = meta;
  const Component = as;

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Component
        className={meta.touched && meta.error ? styles.error : null}
        type={type}
        disabled={disabled}
        {...field}
        {...restMeta}
        id={props.id || props.name}
        onChange={
          onChange ? (e) => onChange(e, field.onChange) : field.onChange
        }
      >
        {as === "select" && props.children ? props.children : null}
      </Component>
      {meta.touched && meta.error ? (
        <div className="error" data-testid={props.name}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default MyFormField;
