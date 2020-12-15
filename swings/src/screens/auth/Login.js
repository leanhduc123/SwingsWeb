import React, {useContext, useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import "../../css/login.css"
import { AuthUserCtx } from '../../context/authUser';
import { Redirect } from 'react-router-dom';

export const Login = () => {
  const { authUser, setAuthUser } = useContext(AuthUserCtx);

  useEffect(() => {
    console.log("prepare login: " + authUser)
  }, [authUser])

  const [registing, setRegisting] = useState(false)
  
  const initialValues_ = {
    username: "",
    password: ""
  };

  const setWithExpiry = (key, obj, ttl) => {
    const now = new Date()
    const item = {
      user: obj,
      expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  const validationSchema_ = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username's length must be greater than 6!")
      .required("Username is required!"),
    password: Yup.string()
      .min(6, "Password's length must be greater than 6!")
      .required("Password is required!"),
  });
  const onSubmit_ = (values) => {
    axios
      .post("http://localhost:5000/login", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data)
        setAuthUser(res.data.user);
        
        setWithExpiry("myUser", {username: res.data.message.user.username, userId: res.data.message.user.userId}, 100000)
        setRegisting(true)
      })
      .then(() => {console.log("Login: " + authUser)})
      .catch((err) => {
        console.log(err)
      });
  };
  function onClick_Login() {
    console.log("Clicked to Login!");
    setAuthUser("hello")
    console.log("Click login" + authUser)
  }

  useEffect(() => {
    console.log(registing)
  }, [registing])

  

  if (localStorage.getItem('myUser') !== null && registing) {
    return <Redirect to="/" />
  } else if (localStorage.getItem('myUser')){
    return <Redirect to="/account" />
  }

  // if (registing) {
  //   return <Redirect to="/" />
  // }

  return (
    <Formik
      initialValues={initialValues_}
      validationSchema={validationSchema_}
      onSubmit={onSubmit_}
    >
      {(formik) => {
        return (
          <Container className="login">
            <Form>
              <p className="header">Log in</p>
              <label>Username</label>
              <Field className="field" type="text" name="username" />
              <ErrorMessage className="error" name="username" component="div" />
              <label>Password</label>
              <Field className="field" type="password" name="password" />
              <ErrorMessage className="error" name="password" component="div" />

              <div className="button-wrapper">
                <button
                  className="button"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                  </button>
              </div>

              <a href="/register" onClick={onClick_Login}>
                Not have an account yet? Register
                </a>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}
