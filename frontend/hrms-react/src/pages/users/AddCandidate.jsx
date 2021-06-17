import React from 'react'
import CandidateService from '../../services/candidateService';
import { Formik, setNestedObjectValues } from "formik";
import { Form, Input, SubmitButton, ResetButton, TextArea, Select } from 'formik-semantic-ui-react'
import { Grid, Header, Segment, FormGroup, FormField, Label } from 'semantic-ui-react'
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
            .required("Soyadınızı girmelisiniz")

    });
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{
                    birth_year: "",
                    mail: "",
                    name: "",
                    nationalIdentity: "",
                    password: "",
                    passwordRepeat: "",
                    surname: ""
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
                    <Form>
                        <FormGroup widths="equal">


                            <FormField>
                                <Input
                                    name="birth_year"
                                    placeholder="birth_year"
                                    value={values.birth_year}
                                    onChange={handleChange}
                                    type="number"
                                />
                                {errors.birth_year && (
                                    <Label basic color="red" pointing>
                                        {errors.birth_year}
                                    </Label>
                                )}
                            </FormField>


                            <FormField>
                                <Input
                                    name="mail"
                                    placeholder="mail"
                                    value={values.mail}
                                    onChange={handleChange}
                                    type="email"
                                />
                                {errors.mail && (
                                    <Label basic color="red" pointing>
                                        {errors.mail}
                                    </Label>
                                )}
                            </FormField>


                            <FormField>
                                <Input
                                    name="name"
                                    placeholder="name"
                                    value={values.name}
                                    type="text"
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <Label basic color="red" pointing>
                                        {errors.name}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="nationalIdentity"
                                    placeholder="nationalIdentity"
                                    value={values.nationalIdentity}
                                    type="number"
                                    onChange={handleChange}
                                />
                                {errors.nationalIdentity && (
                                    <Label basic color="red" pointing>
                                        {errors.nationalIdentity}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="password"
                                    placeholder="password"
                                    value={values.password}
                                    type="password"
                                    onChange={handleChange}
                                />
                                {errors.password && (
                                    <Label basic color="red" pointing>
                                        {errors.password}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="passwordRepeat"
                                    placeholder="passwordRepeat"
                                    value={values.passwordRepeat}
                                    type="password"
                                    onChange={handleChange}
                                />
                                {errors.passwordRepeat && (
                                    <Label basic color="red" pointing>
                                        {errors.passwordRepeat}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="surname"
                                    placeholder="surname"
                                    value={values.surname}
                                    type="text"
                                    onChange={handleChange}
                                />
                                {errors.surname && (
                                    <Label basic color="red" pointing>
                                        {errors.surname}
                                    </Label>
                                )}
                            </FormField>
                            <FormField
                                id="form-button-control-public"
                                control={SubmitButton}
                                content="Confirm"
                                type="submit"
                                label="Label with htmlFor"
                            />



                        </FormGroup>

                    </Form>
                )}
            </Formik>

        </div>
    )
}
