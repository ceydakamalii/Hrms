import React, { useState, useEffect } from 'react'
import CityService from '../services/cityService'
import JobPostingService from '../services/jobPostingService';
import JobPositionService from "../services/jobPositionService"
import { Formik } from "formik";
import { Form, Col, Row } from 'react-bootstrap'
import { Input, TextArea, Select } from 'formik-semantic-ui-react'
import { FormField, Label, Button } from 'semantic-ui-react'
import * as yup from "yup";
import WorkTimeService from '../services/workTimeService';
import WorkPlaceService from '../services/workPlaceService';

export default function AddJobPosting() {

    const [cities, setCities] = useState([]);
    const [workTimes, setWorkTime] = useState([]);
    const [workPlaces, setWorkPlace] = useState([])
    const [jobPositions, setJobPosition] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        let worktimeService = new WorkTimeService()
        let workPlaceService = new WorkPlaceService()
        let jobPositionService = new JobPositionService()
        cityService.getCities().then((sonuc) => setCities(sonuc.data.data))
        workPlaceService.getWorkPlace().then((sonuc) => setWorkPlace(sonuc.data.data))
        worktimeService.getWorkTime().then((sonuc) => setWorkTime(sonuc.data.data))
        jobPositionService.getJobPositions().then((sonuc) => setJobPosition(sonuc.data.data))

    }, []);

    var cityOptions = cities.map(function (city) {
        return { key: city.id, text: city.name, value: city.id, id: city.id };
    });

    var workTimeOptions = workTimes.map(function (workTime) {
        return { key: workTime.id, text: workTime.name, value: workTime.id, id: workTime.id };
    })

    var workPlaceOptions = workPlaces.map(function (workPlace) {
        return { key: workPlace.id, text: workPlace.name, value: workPlace.id, id: workPlace.id };
    });

    var jobPositionOptions = jobPositions.map(function (jobPosition) {
        return { key: jobPosition.id, text: jobPosition.position, value: jobPosition.id, id: jobPosition.id };
    });


    let schema = yup.object().shape({
        createdDate: yup.date().required("İlan yayınlama tarihini giriniz."),
        openPositionNumber: yup.string().required("Açık Pozisyon sayısını giriniz"),
        closedDate: yup.date().required("İlan kapanış tarihini giriniz"),
        cityId: yup.number().required(),
        workPlaceId: yup.number(),
        workTimeId: yup.number(),
        employerId: yup.number().required(),
        description: yup.string().required(),
        jobPositionId: yup.number().required(),
        minSalary: yup.number().min(0, "0 Dan az olamaz"),
        maxSalary: yup.number().min(0, "0 Dan az olamaz"),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });



    return (
        <div className="border rounded p-3" style={{ background: "#EDEDED" }}>
            <h1 >İlan Oluştur</h1>

            <Formik
                initialValues={{
                    createdDate: "",
                    openPositionNumber: "",
                    cityId: "",
                    workPlaceId: "",
                    workTimeId: "",
                    description: "",
                    closedDate: "",
                    employerId: "",
                    jobPositionId: "",
                    minSalary: "",
                    maxSalary: "",
                    terms: false,

                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    let addJobPosting = new JobPostingService()
                    addJobPosting.addJobPosting(values).then(response => console.log(response.data.message))

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
                                <Form.Label>Oluşturma Tarih</Form.Label>
                                <FormField>
                                    <Input
                                        name="createdDate"
                                        placeholder="Created Date"
                                        value={values.createdDate}
                                        onChange={handleChange}
                                        type="date"
                                        style={{ display: "block" }}
                                    />
                                    {errors.createdDate && (
                                        <Label basic color="red" pointing>
                                            {errors.createdDate}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <Form.Label>Kapanış Tarih</Form.Label>
                                <FormField>
                                    <Input
                                        name="closedDate"
                                        placeholder="Closed Date"
                                        value={values.closedDate}
                                        onChange={handleChange}
                                        type="date"
                                        style={{ display: "block" }}
                                    />
                                    {errors.closedDate && (
                                        <Label basic color="red" pointing>
                                            {errors.closedDate}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>



                        </Row>

                        <Row className="mb-6">
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <FormField>
                                    <Input
                                        name="openPositionNumber"
                                        placeholder="Açık Pozisyon"
                                        value={values.openPositionNumber}
                                        type="number"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.openPositionNumber && (
                                        <Label basic color="red" pointing>
                                            {errors.openPositionNumber}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>


                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <FormField>
                                    <Input
                                        name="employerId"
                                        placeholder="Şirket No"
                                        value={values.employerId}
                                        type="number"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.employerId && (
                                        <Label basic color="red" pointing>
                                            {errors.employerId}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Row className="mb-6">
                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <FormField>
                                    <Input
                                        name="minSalary"
                                        placeholder="Min Maaş"
                                        value={values.minSalary}
                                        type="number"
                                        label="Min Maaş"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.minSalary && (
                                        <Label basic color="red" pointing>
                                            {errors.minSalary}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>


                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <FormField>
                                    <Input
                                        name="maxSalary"
                                        placeholder="Max Maaş"
                                        value={values.maxSalary}
                                        type="number"
                                        label="Max Maaş"
                                        onChange={handleChange}
                                        style={{ display: "block" }}
                                    />
                                    {errors.maxSalary && (
                                        <Label basic color="red" pointing>
                                            {errors.maxSalary}
                                        </Label>
                                    )}
                                </FormField>
                            </Form.Group>
                        </Row>
                        <Row className="md-6">

                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik02">
                                <FormField>
                                    <Select
                                        name="jobPositionId"
                                        id={jobPositionOptions.text}
                                        onChange={handleChange}
                                        options={jobPositionOptions}
                                        label="İş Pozisyonu"
                                        value={values.jobPositionId || ""}
                                        onBlur={handleBlur}
                                        touched={values.jobPositionId}
                                        style={{ display: "block" }}
                                    >
                                    </Select>
                                </FormField>

                            </Form.Group>

                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <FormField>
                                    <Select
                                        name="cityId"
                                        id={cityOptions.text}
                                        onChange={handleChange}
                                        options={cityOptions}
                                        label="Lokasyon"
                                        value={values.cityId || ""}
                                        onBlur={handleBlur}
                                        touched={values.cityId}
                                        style={{ display: "block" }}
                                    >
                                    </Select>
                                </FormField>
                            </Form.Group>

                        </Row>
                        <Row className="md-6">

                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik02">
                                <FormField>
                                    <Select
                                        name="workPlaceId"
                                        id={workPlaceOptions.text}
                                        onChange={handleChange}
                                        options={workPlaceOptions}
                                        label="Çalışma Yeri"
                                        value={values.workPlaceId || ""}
                                        onBlur={handleBlur}
                                        touched={values.workPlaceId}
                                        style={{ display: "block" }}
                                    >
                                    </Select>
                                </FormField>
                            </Form.Group>

                            <Form.Group as={Col} md="6" widths="equal" controlId="validationFormik01">
                                <FormField>
                                    <Select
                                        name="workTimeId"
                                        id={workTimeOptions.text}
                                        onChange={handleChange}
                                        options={workTimeOptions}
                                        label="Çalışma Zamanı"
                                        value={values.workTimeId || ""}
                                        onBlur={handleBlur}
                                        touched={values.workTimeId}
                                        style={{ display: "block" }}
                                    >
                                    </Select>
                                </FormField>
                            </Form.Group>

                        </Row>

                        <Row className="md-12">
                            <FormField style={{ display: "block"}}>
                                <TextArea
                                    as={Col}
                                    md="12"
                                    id="description"
                                    control={TextArea}
                                    label="Açıklama"
                                    placeholder="Açıklama"
                                    value={values.description}
                                   

                                />
                                {errors.description && (
                                    <Label basic color="red" pointing>
                                        {errors.description}
                                    </Label>
                                )}</FormField>

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
                            content="Oluştur"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                            className="mb-2"
                        />
                    </Form>
                )}
            </Formik>

        </div >
    )
}
