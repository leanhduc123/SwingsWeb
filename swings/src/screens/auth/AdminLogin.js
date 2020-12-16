import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../css/adminlogin.css"
import { Container } from 'react-bootstrap';
import { AuthAdminCtx } from '../../context/authAdmin';
import axios from "axios";

const setWithExpiry = (key, obj, ttl) => {
  const now = new Date()
  const item = {
    user: obj,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const AdminLogin = () => {
  const { authAdmin, setAuthAdmin } = useState(AuthAdminCtx)
  const [isError, setError ] = useState(false)
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [registing, setRegisting] = useState(false)

  useEffect(() => {
    console.log("prepare login: " + authAdmin)
  }, [authAdmin])

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

  const onSubmit_ = (values) => {
    setLogin(true);
    axios
      .post("http://localhost:5000/admin/login", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data)
        setAuthAdmin(res.data.user);
        
        setWithExpiry("myUser", {username: res.data.message.user.username, userId: res.data.message.user.userId}, 100000)
        setRegisting(true)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setShow(true)
      })
      .finally(() => {
        setLogin(false)
      });
  };
  function onClick_Login() {
    console.log("Clicked to Login!");
    setAuthAdmin("hello")
    console.log("Click login" + authAdmin)
  }
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

