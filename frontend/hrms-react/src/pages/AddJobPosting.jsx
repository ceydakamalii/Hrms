import React, { useState, useEffect } from 'react'
import CityService from '../services/cityService'
import JobPostingService from '../services/jobPostingService';
import { Formik, setNestedObjectValues } from "formik";
import { Form, Input, SubmitButton, ResetButton, TextArea, Select } from 'formik-semantic-ui-react'
import { Grid, Header, Segment, FormGroup, FormField, Label } from 'semantic-ui-react'
import * as yup from "yup";
import WorkTimeService from '../services/workTimeService';
import WorkPlaceService from '../services/workPlaceService';

export default function AddJobPosting() {

    const [cities, setCities] = useState([]);
    const [workTimes,setWorkTime] = useState([]);
    const [workPlaces,setWorkPlace] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        let worktimeService = new WorkTimeService()
        let workPlaceService = new WorkPlaceService()
        cityService.getCities().then((sonuc) => setCities(sonuc.data.data))
        workPlaceService.getWorkPlace().then((sonuc)=>setWorkPlace(sonuc.data.data))
        worktimeService.getWorkTime().then((sonuc)=>setWorkTime(sonuc.data.data))
        
    }, []);

    var cityOptions = cities.map(function (city) {
        return { key: city.id, text: city.name, value: city.id, id: city.id };
    });

    var workTimeOptions = workTimes.map(function(workTime){
        return {key: workTime.id, text: workTime.name, value: workTime.id,id:workTime.id};
    })

    var workPlaceOptions = workPlaces.map(function (workPlace) {
        return { key: workPlace.id, text: workPlace.name, value: workPlace.id, id: workPlace.id };
    });
    

    let schema = yup.object().shape({
        createdDate: yup.date().required("Zorunlu Alan"),
        openPositionNumber: yup.string().required(),
        closedDate: yup.date().required("Zorunlu Alan"),
        cityId: yup.number().required(),
        workPlaceId: yup.number(),
        workTimeId:yup.number(),
        employerId: yup.number().required(),
        description: yup.string().required(),
        jobPositionId: yup.number().required(),
    });


    return (
        <div>
            <h1>Anywhere in your app!</h1>

            <Formik
                initialValues={{
                    createdDate: "",
                    openPositionNumber: "",
                    cityId: "",
                    workPlaceId:"",
                    workTimeId:"",
                    description: "",
                    closedDate: "",
                    employerId: "",
                    jobPositionId: "",

                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    let addJobPosting=new JobPostingService()
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
                    <Form>
                        <FormGroup widths="equal">
                            
                                
                            <FormField>
                                <Input
                                    name="createdDate"
                                    placeholder="Created Date"
                                    value={values.createdDate}
                                    onChange={handleChange}
                                    type="date"
                                />
                                {errors.createdDate && (
                                    <Label basic color="red" pointing>
                                        {errors.createdDate}
                                    </Label>
                                )}
                            </FormField>
                            

                            <FormField>
                                <Input
                                    name="closedDate"
                                    placeholder="Closed Date"
                                    value={values.closedDate}
                                    onChange={handleChange}
                                    type="date"
                                />
                                {errors.closedDate && (
                                    <Label basic color="red" pointing>
                                        {errors.closedDate}
                                    </Label>
                                )}
                            </FormField>
                          

                            <FormField>
                                <Input
                                    name="openPositionNumber"
                                    placeholder="Open Position Number"
                                    value={values.openPositionNumber}
                                    type="number"
                                    onChange={handleChange}
                                />
                                {errors.openPositionNumber && (
                                    <Label basic color="red" pointing>
                                        {errors.openPositionNumber}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="employerId"
                                    placeholder="emp Id"
                                    value={values.employerId}
                                    type="number"
                                    onChange={handleChange}
                                />
                                {errors.employerId && (
                                    <Label basic color="red" pointing>
                                        {errors.employerId}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Input
                                    name="jobPositionId"
                                    placeholder="jobPositionId"
                                    value={values.jobPositionId}
                                    type="number"
                                    onChange={handleChange}
                                />
                                {errors.jobPositionId && (
                                    <Label basic color="red" pointing>
                                        {errors.jobPositionId}
                                    </Label>
                                )}
                            </FormField>
                            <FormField>
                                <Select
                                    name="cityId"
                                    id={cityOptions.text}
                                    onChange={handleChange}
                                    options={cityOptions}
                                    label="City"
                                    value={values.cityId || ""}
                                    onBlur={handleBlur}
                                    touched={values.cityId}
                                    style={{ display: "block" }}
                                >
                                </Select>
                            </FormField>
                            <FormField>
                                <Select
                                    name="workPlaceId"
                                    id={workPlaceOptions.text}
                                    onChange={handleChange}
                                    options={workPlaceOptions}
                                    label="WorkPlace"
                                    value={values.workPlaceId || ""}
                                    onBlur={handleBlur}
                                    touched={values.workPlaceId}
                                    style={{ display: "block" }}
                                >
                                </Select>
                            </FormField>
                            <FormField>
                                <Select
                                    name="workTimeId"
                                    id={workTimeOptions.text}
                                    onChange={handleChange}
                                    options={workTimeOptions}
                                    label="WorkTime"
                                    value={values.workTimeId || ""}
                                    onBlur={handleBlur}
                                    touched={values.workTimeId}
                                    style={{ display: "block" }}
                                >
                                </Select>
                            </FormField>
                        </FormGroup>
                        <FormField>
                            <TextArea
                                id="description"
                                control={TextArea}
                                label="description"
                                placeholder="description"
                                value={values.description}
                            />
                            {errors.description && (
                                <Label basic color="red" pointing>
                                    {errors.description}
                                </Label>
                            )}</FormField>


                        <FormField
                            id="form-button-control-public"
                            control={SubmitButton}
                            content="Confirm"
                            type="submit"
                            label="Label with htmlFor"
                        />
                    </Form>
                )}
            </Formik>

        </div>
    )
}
