import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../css/adminlogin.css"
import { Container } from 'react-bootstrap';

export const AdminLogin = () => {
  const initialValues_ = {
    username: "",
    password: "",
  };

  const validationSchema_ = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username's length must be greater than 6!")
      .required("Username is required!"),
    password: Yup.string()
      .min(6, "Password's length must be greater than 6!")
      .required("Password is required!"),
  });
  const onSubmit_ = (value) => {
    console.log(value);
  };
  // function onClick_Login() {
  //   console.log("Clicked to Login!");
  // }
  return (
    <Formik
      initialValues={initialValues_}
      validationSchema={validationSchema_}
      onSubmit={onSubmit_}
    >
      {(formik) => {
        return (
          <Container className="adminContainer">
            <Form>
              <p className="header">Admin</p>
              <label>Username</label>
              <Field className="field" type="text" name="username" />
              <ErrorMessage className="error" name="username" component="div" />
              <label>Password</label>
              <Field className="field" type="password" name="password" />
              <ErrorMessage className="error" name="password" component="div" />

              <div className = "button-wrapper">
                <button
                  className="button"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
              </div>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}

