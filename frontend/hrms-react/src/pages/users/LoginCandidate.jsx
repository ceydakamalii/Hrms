import React from 'react'
import { Formik} from "formik";
import { Form, InputGroup, Col, Button } from 'react-bootstrap'
import * as yup from "yup";
export default function LoginCandidate() {
    let schema = yup.object().shape({
        mail: yup.string().email("Geçersiz e-posta adresi")
            .required("E-posta adresi girmelisiniz"),
        password: yup.string().required("Şifre girmelisiniz"),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return (
        <div>
            <h1>Üye Girişi</h1>
            <Formik
                initialValues={{

                    mail: "",
                    password: "",
                    terms: false
                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form noValidate onSubmit={handleSubmit} >
                        <Form.Row>
                            <Form.Group as={Col} md="4"></Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikMail">
                                <Form.Label>Mail</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="email"
                                        placeholder="Mail"
                                        aria-describedby="inputGroupPrepend"
                                        name="mail"
                                        value={values.mail}
                                        onChange={handleChange}
                                        isInvalid={!!errors.mail}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.mail}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4"></Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik03">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>


                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                )}





            </Formik>

        </div >
    )
}
