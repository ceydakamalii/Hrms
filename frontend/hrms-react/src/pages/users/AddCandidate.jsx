import React from 'react'
import CandidateService from '../../services/candidateService';
import { Formik } from "formik";
import { Form, Col, Row } from 'react-bootstrap'
import { Input } from 'formik-semantic-ui-react'
import {  FormField, Label,Button } from 'semantic-ui-react'
import * as yup from "yup";
export default function AddCandidate() {
    let schema = yup.object().shape({
        birth_year: yup.string().min(4, "Doğum yılı 4 karakter olabilir")
            .max(4, "Doğum yılı 4 karakter olabilir")
            .required("Doğum yılınızı girmelisiniz"),
        mail: yup.string().email("Geçersiz e-posta adresi")
            .required("E-posta adresi girmelisiniz"),
        name: yup.string().min(3, "Adınız en az 3 karakter olabilir")
            .required("Adınızı girmelisiniz"),
        nationalIdentity: yup.string()
            .min(11, "Kimlik numarası 11 haneli olmalı")
            .max(11, "Kimlik numarası 11 haneli olmalı")
            .required("Kimlik numaranızı girmelisiniz"),
        password: yup.string().required("Şifre girmelisiniz"),
        passwordRepeat: yup.string()
            .oneOf([yup.ref("password"), null], "Şifre eşleşmiyor")
            .required("Şifre tekrarı girmelisiniz"),
        surname: yup.string()
            .min(2, "Soyadınız en az 2 karakter olabilir")
            .required("Soyadınızı girmelisiniz"),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),


    });
    return (
        <div className="border rounded p-3" style={{ background: "#EDEDED" }}>
            <h1>Üye Ol</h1>
            <Formik
                initialValues={{
                    birth_year: "",
                    mail: "",
                    name: "",
                    nationalIdentity: "",
                    password: "",
                    passwordRepeat: "",
                    surname: "",
                    term: "",
                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    let addCandidate = new CandidateService()
                    addCandidate.addCandidate(values).then(response => console.log(response.data.message))

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
                        <Row className="mb-6">
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <Form.Label>Doğum Yılı</Form.Label>

                                <FormField>
                                    <Input
                                        name="birth_year"
                                        placeholder="doğum tarihi"
                                        value={values.birth_year}
                                        onChange={handleChange}
                                        type="date"
                                        style={{ display: "block" }}
                                    />
                                    {errors.birth_year && (
                                        <Label basic color="red" pointing>
                                            {errors.birth_year}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>

                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
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

                        <Row className="mb-6">
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik03">
                                <Form.Label>Ad</Form.Label>
                                <FormField>
                                    <Input
                                        name="name"
                                        placeholder="name"
                                        value={values.name}
                                        type="text"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.name && (
                                        <Label basic color="red" pointing>
                                            {errors.name}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik05">
                                <Form.Label>TC No</Form.Label>
                                <FormField>
                                    <Input
                                        name="nationalIdentity"
                                        placeholder="nationalIdentity"
                                        value={values.nationalIdentity}
                                        type="number"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.nationalIdentity && (
                                        <Label basic color="red" pointing>
                                            {errors.nationalIdentity}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Row className="mb-6">
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik06">
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
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik07">
                                <Form.Label>Şifre Tekrarı</Form.Label>
                                <FormField>
                                    <Input
                                        name="passwordRepeat"
                                        placeholder="passwordRepeat"
                                        value={values.passwordRepeat}
                                        type="password"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.passwordRepeat && (
                                        <Label basic color="red" pointing>
                                            {errors.passwordRepeat}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Row className="mb-12">
                            <Form.Group as={Col} md="12" widths="equal" controlId="validationFormik06">
                                <Form.Label>Soyad</Form.Label>
                                <FormField>
                                    <Input
                                        name="surname"
                                        placeholder="surname"
                                        value={values.surname}
                                        type="text"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.surname && (
                                        <Label basic color="red" pointing>
                                            {errors.surname}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Sözleşmeyi okudum ve kabul ediyorum"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                            />
                        </Form.Group>

                        <Button
                            content="Üye Ol"
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
