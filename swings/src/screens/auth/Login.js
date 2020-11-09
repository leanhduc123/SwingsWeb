import React from 'react'
import { Container, Form, Button, Row } from 'react-bootstrap'
import * as yup from "yup";
import { useFormik } from "formik";
import { Link, Route, Switch } from "react-router-dom";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(6, "Username's length must be greater than 6!")
        .required("Username is required!"),
    password: yup
        .string()
        .min(6, "Password's length must be greater than 6!")
        .required("Password is required!"),
});

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const { handleSubmit, handleBlur, handleChange, errors, touched } = formik;

    return (
        <div>
            <div class="p-0 bg-dark text-white" style={{ height: 50 }}>
                <Container>
                    <h2>LOG IN</h2>
                </Container>
            </div>
            <Container>
                <Form className="col-8 m-auto" onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.username && errors.username} />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.username && errors.username} />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Text as={Link} to="/register" className="text-muted">
                        Not have an account yet?
                        </Form.Text>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
