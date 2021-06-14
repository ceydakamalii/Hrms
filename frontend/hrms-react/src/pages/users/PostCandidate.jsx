import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import CandidateService from '../../services/candidateService';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {
    Header, Icon, Divider, Segment
} from 'semantic-ui-react'

export default function PostCandidate() {

    const validationSchema = yup.object({
        birth_year: yup
            .string()
            .required('Doğum yılı zorunludur'),
        mail: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        name: yup
            .string()
            .required('Name alanı zorunludur'),
        nationalIdentity: yup
            .string()
            .required('Tc no zorunlu'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),

        passwordRepeaty: yup
            .string('Enter your passwordRepeaty')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),

        surname: yup
            .string().required("Soyad Alanı zorunludur.")

    });
    const formik = useFormik({
        initialValues: {
            birth_year: '',
            mail: '',
            name: '',
            nationalIdentity: '',
            password: '',
            passwordRepeaty: '',
            surname: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            let candidateService = new CandidateService();
            candidateService.post({
                birth_year: values.birth_year,
                mail: values.mail,
                name: values.name,
                nationalIdentity: values.nationalIdentity,
                password: values.password,
                passwordRepeaty: values.passwordRepeaty,
                surname: values.surname
            });
        },
    });

    return (
        <div>
            <Header as='h2' icon>
                <Icon name='plus' />
                Aday Üye Girişi
                <Header.Subheader>
                    Buradaki bilgileri doldurarak Üye olabilirsin.
                </Header.Subheader>
            </Header>
            <Divider fitted />


            <Segment >
                <form onSubmit={formik.handleSubmit} >
                    <TextField
                        fullWidth
                        id="birth_year"
                        name="birth_year"
                        label="Doğum yılı"
                        value={formik.values.birth_year}
                        onChange={formik.handleChange}
                        error={formik.touched.birth_year && Boolean(formik.errors.birth_year)}
                        helperText={formik.touched.birth_year && formik.errors.birth_year}
                    />
                    <p />
                    <TextField
                        fullWidth
                        id="mail"
                        name="mail"
                        label="E-Posta"
                        value={formik.values.mail}
                        onChange={formik.handleChange}
                        error={formik.touched.mail && Boolean(formik.errors.mail)}
                        helperText={formik.touched.mail && formik.errors.mail}
                    />
                    <p />
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Ad"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <p />
                    <TextField
                        fullWidth
                        id="nationalIdentity"
                        name="nationalIdentity"
                        label="Tc"
                        value={formik.values.nationalIdentity}
                        onChange={formik.handleChange}
                        error={formik.touched.nationalIdentity && Boolean(formik.errors.nationalIdentity)}
                        helperText={formik.touched.nationalIdentity && formik.errors.nationalIdentity}
                    />
                    <p />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />


                    <p />

                    <TextField
                        fullWidth
                        id="passwordRepeaty"
                        name="passwordRepeaty"
                        label="passwordRepeaty"
                        value={formik.values.passwordRepeaty}
                        onChange={formik.handleChange}
                        error={formik.touched.passwordRepeaty && Boolean(formik.errors.passwordRepeaty)}
                        helperText={formik.touched.passwordRepeaty && formik.errors.passwordRepeaty}
                    />


                    <p />


                    <p />
                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="surname"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                    />
                    <p />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        İlanı Ver
                    </Button>
                </form>

            </Segment>

        </div >
    )
}



