import React from 'react'
import { Formik } from "formik";
import { Form, Col, Row } from 'react-bootstrap'
import { FormField, Label, Button } from 'semantic-ui-react'
import { Input } from 'formik-semantic-ui-react'
import * as yup from "yup";
export default function LoginCandidate() {
    let schema = yup.object().shape({
        mail: yup.string().email("Geçersiz e-posta adresi")
            .required("E-posta adresi girmelisiniz"),
        password: yup.string().required("Şifre girmelisiniz"),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return (
        <div className="border rounded p-3" style={{ background: "#EDEDED" }}>
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
                    <Form className="page-center" noValidate onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} md="12" widths="equal" controlId="validationFormik01">
                                <Form.Label>E-Mail</Form.Label>
                                <FormField>
                                    <Input
                                        name="mail"
                                        placeholder="mail"
                                        value={values.mail}
                                        onChange={handleChange}
                                        type="email"
                                        style={{ display: "block" }}
                                    />
                                    {errors.mail && (
                                        <Label basic color="red" pointing>
                                            {errors.mail}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="12" widths="equal" controlId="validationFormik06">
                                <Form.Label>Şifre</Form.Label>
                                <FormField>
                                    <Input
                                        name="password"
                                        placeholder="password"
                                        value={values.password}
                                        type="password"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.password && (
                                        <Label basic color="red" pointing>
                                            {errors.password}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Beni Hatırla"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button
                            content="Giriş Yap"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                            
                        />
                    </Form>
                )}





            </Formik>

        </div >
    )
}
