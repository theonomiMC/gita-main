import React from "react";

export const Input = (props) => {
  const { id, onChange, children, error, ...rest } = props;

  return (
    <div className="row mb-4">
      <label htmlFor={id} className="col-sm-4 col-form-label col-form-label">
        {children}
      </label>
      <div className="col-sm-8">
        <input id={id} onChange={onChange} {...rest} className="form-control" />
      </div>
      <p className="error-msg">{error}</p>
    </div>
  );
};

{
}
