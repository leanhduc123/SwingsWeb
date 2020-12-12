import React, { useState } from 'react'
import { Container, Modal } from 'react-bootstrap'
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../css/register.css"
import axios from "axios"

const validationSchema_ = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username's length must be greater than 6!")
    .required("Username is required!"),
  password: Yup.string()
    .min(6, "Password's length must be greater than 6!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Confirm password not matched")
    .required("Confirm password is required!"),
});

export const Register = () => {
  const [registering, setRegistering] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [show, setShow] = useState(false);
  const initialValues_ = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit_ = (values) => {
    setRegistering(true);
    axios
      .post("http://localhost:5000/register", {
        username: values.username,
        email: "leeanhducc111@gmail.com",
        password: values.password,
      })
      .then(() => {
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
        console.log(err)
      })
      .finally(() => {
        setRegistering(false);
        setShow(true)
        var values = document.getElementsByClassName("field")
      });
  };
  function onClick_Login() {
    console.log("Clicked to Login!");
  }
  return (
    <Formik
      initialValues={initialValues_}
      validationSchema={validationSchema_}
      onSubmit={onSubmit_}
    >
      {(formik) => {
        return (
          <Container className="register">
            <Modal show={show && isSuccess && !isError} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <span>Đăng kí thành công</span>
                </Modal.Header>
            </Modal>
            <Modal show={show && isError && !isSuccess} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <span>Tài khoản không hợp lệ</span>
                </Modal.Header>
            </Modal>
            <Form>
              <p className="header">Register</p>
              <label>Username</label>
              <Field className="field" type="text" name="username" />
              <ErrorMessage className="error" name="username" component="div" />
              <label>Password</label>
              <Field className="field" type="password" name="password" />
              <ErrorMessage className="error" name="password" component="div" />
              <label>Confirm Password</label>
              <Field className="field" type="password" name="confirmPassword" />
              <ErrorMessage
                className="error"
                name="confirmPassword"
                component="div"
              />

              <div className="button-wrapper">
                <button
                  className="button"
                  type="submit"
                  disabled={registering}
                >
                  {registering ? "Registering ..." : "Register"}
                  </button>
              </div>

              <a href="/login" onClick={onClick_Login}>
                Already have an account? Login
                </a>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}