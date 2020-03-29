import React from "react";

const RegisterForm = props => {
  const { inputs, setInputs } = props;

  const onChangeHandler = e => {
    // e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  // const onSubmitHander = e => {
  //   e.preventDefault();
  //   console.log(formState);
  // };
  return (
    <div>
      <h2>Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
