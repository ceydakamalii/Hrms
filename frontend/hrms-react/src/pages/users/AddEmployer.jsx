import React from 'react'
import EmployerService from '../../services/employerService';
import { Formik, setNestedObjectValues } from "formik";
import { Form, Input, SubmitButton, ResetButton, TextArea, Select } from 'formik-semantic-ui-react'
import { Grid, Header, Segment, FormGroup, FormField, Label } from 'semantic-ui-react'
import * as yup from "yup";
export default function AddEmployer() {
    let schema = yup.object().shape({
        companyName: yup.string()
            .min(2, "Şirket adı en az 2 karakter olabilir")
            .required("Şirket adı girmelisiniz"),
        mail: yup.string()
            .email("Geçersiz e-posta adresi")
            .required("E-posta adresi girmelisiniz"),
        password: yup.string().required("Şifre girmelisiniz"),
        passwordRepeat: yup.string()
            .oneOf([yup.ref("password"), null], "Şifre eşleşmiyor")
            .required("Şifre tekrarı girmelisiniz"),
        phoneNumber: yup.string().required("Telefon numarası girmelisiniz"),

        webAddress: yup.string().required("Web site adresi girmelisiniz"),

    });
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{
                    companyName: "",
                    mail: "",
                    password: "",
                    passwordRepeat: "",
                    phoneNumber:"",
                    webAddress: ""
                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    let addEmployer = new EmployerService()
                    addEmployer.addEmployer(values).then(response => console.log(response.data.message))

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
                                    name="companyName"
                                    placeholder="companyName"
                                    value={values.companyName}
                                    onChange={handleChange}
                                    type="text"
                                />
                                {errors.birth_year && (
                                    <Label basic color="red" pointing>
                                        {errors.companyName}
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
                                    name="phoneNumber"
                                    placeholder="phoneNumber"
                                    value={values.phoneNumber}
                                    type="text"
                                    onChange={handleChange}
                                />
                                {errors.phoneNumber && (
                                    <Label basic color="red" pointing>
                                        {errors.phoneNumber}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="webAddress"
                                    placeholder="webAddress"
                                    value={values.webAddress}
                                    type="text"
                                    onChange={handleChange}
                                />
                                {errors.webAddress && (
                                    <Label basic color="red" pointing>
                                        {errors.webAddress}
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
